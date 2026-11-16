# 📒 D4 CLI Agent: My Notes

Simple notes on everything used in this project, so I can come back and understand it later.

---

## 🗺️ 1. How the app flows

```
cli.js  →  src/main.js  →  src/ai/graph/graph.js  →  src/ai/graph/node.js  →  AI (Groq)
 (start)    (API key check)   (chat loop + graph)      (calls the model)
```

1. `cli.js` starts the app. `package.json` has `"bin": { "beta": "./cli.js" }`, so typing `beta` in the terminal runs it.
2. `main.js` checks for an API key. If there's none, or it's invalid, it asks for one and saves it.
3. `graph.js` runs the chat loop: ask the user, send the messages to the graph, save the reply.
4. `node.js` (`LLMNode`) actually talks to the AI model.

---

## 📁 2. `os` and `path`: building folder paths

File: `src/utils/constant.js`

```js
import os from "os";
import path from "path";

export const HOME_DIR = os.homedir();                   // C:\Users\mohda
export const CONFIG_DIR = path.join(HOME_DIR, ".beta"); // C:\Users\mohda\.beta
```

- **`os.homedir()`** gives the current user's home folder. It works on every computer and every OS, so no hardcoded path is needed.
- **`path.join(a, b)`** joins path parts with the correct slash for the OS:
  - Windows → `C:\Users\mohda\.beta`
  - Mac/Linux → `/Users/name/.beta`
- ❗ Never join paths with `+ "/" +`. Always use `path.join`.
- **`process.cwd()`** is the folder the terminal is currently in, where you ran `beta`. It's used in the system prompt so the AI knows where to create files.

---

## 📄 3. `fs/promises`: working with files

File: `src/utils/file.util.js`. `fs` = **f**ile **s**ystem, the Node.js module for file CRUD.

| Method | What it does |
|---|---|
| `fs.access(path)` | Checks if a file or folder exists. **Throws an error if it doesn't**, so put it in `try/catch`. |
| `fs.mkdir(path, { recursive: true })` | Creates a folder. `recursive: true` also creates any missing parent folders. |
| `fs.readFile(path, "utf-8")` | Reads a file as text. Without `"utf-8"` you get a raw Buffer. |
| `fs.writeFile(path, content)` | Writes a file. Creates it if missing, **overwrites** it if it exists. |

The pattern used in `getSettingsFile()`:

```js
try {
  await fs.access(CONFIG_DIR);        // does the folder exist?
} catch {
  await fs.mkdir(CONFIG_DIR, { recursive: true }); // no → create it
}
```

💡 JSON files are saved as text, so:
- **saving:** `JSON.stringify(obj)` (object → text)
- **reading:** `JSON.parse(text)` (text → object)

💡 Saving the API key without losing other settings:

```js
JSON.stringify({ ...settingsContent, apiKey }) // keep old settings, add/replace apiKey
```

---

## ⌨️ 4. `readline`: asking the user for input

File: `src/utils/readline.util.js`

```js
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const answer = await rl.question("[User]: ");
rl.close(); // close when done, or the program never exits
```

---

## 🔑 5. Checking the API key

`getApiKey()` makes a test call to `https://api.groq.com/openai/v1/models` with the key.
- Request works → the key is valid.
- Request fails → the key is invalid or expired, so `main.js` asks again and calls `main()` again (recursion).

---

## 🕸️ 6. LangGraph basics: state, node, edges

File: `src/ai/graph/graph.js`

```js
const stateFormat = z.object({ messages: z.array(z.any()) }); // shape of the state

const graph = new StateGraph(stateFormat)
  .addNode("LLMNode", LLMNode)       // a step in the graph
  .addEdge(START, "LLMNode")         // start → LLMNode
  .addEdge("LLMNode", END)           // LLMNode → end
  .compile();
```

- **State** is the data that moves through the graph (here, just `messages`).
- **Node** is a function that gets the state and returns the updated state.
- **Edge** says which node runs next.
- **`graph.invoke(state, config)`** runs the graph and returns the final state.
  - The second argument (`config`) carries extra data any node or tool can read, e.g. `{ context: { username: "Mohd Ayan" } }`.

### Message types

| Type | Who it's from |
|---|---|
| `SystemMessage` | Hidden rules for the AI (personality, rules, current folder path) |
| `HumanMessage` | The user |
| `AIMessage` | The AI's reply |

---

## 🧠 7. Memory: how the bot remembers the chat

The AI has **no memory of its own**. It only knows what we send it. So we keep every message in an array and send the **whole history** each time.

```js
let messages = [new SystemMessage("...rules...")];

while (true) {
  messages.push(new HumanMessage(userInput));    // 1. add the user's message
  const response = await graph.invoke({ messages }); // 2. send the full history
  messages = response.messages;                  // 3. take the updated history back
}
```

### ❓ Why `messages = response.messages` and not `push`?

Because the node returns **the old messages + the new AI reply**:

```js
return { messages: [...state.messages, aiMessage] };
```

So `response.messages` is already the **complete** history.

| Turn | Before invoke | `response.messages` |
|---|---|---|
| 1 | `[S, H1]` | `[S, H1, A1]` |
| 2 | `[S, H1, A1, H2]` | `[S, H1, A1, H2, A2]` |

- ✅ `messages = response.messages` takes the newest full copy. Nothing is lost.
- ❌ `messages.push(...response.messages)` would **duplicate** everything each turn.

💡 For later: LangGraph has `MessagesAnnotation`, which appends automatically. With it, the node can just return `{ messages: [aiMessage] }`.

---

## 🌊 8. Streaming + `.concat()`

File: `src/ai/graph/node.js`

The AI sends its reply **in small pieces (chunks)** instead of all at once. That's what gives the typing effect.

```js
let aiMessage = "";

for await (const chunk of stream) {
  process.stdout.write(chunk.text);           // show text live

  if (!aiMessage) aiMessage = chunk           // first chunk: nothing to merge yet, so take it
  else aiMessage = aiMessage.concat(chunk)    // next chunks: merge into what we have
}
```

### What is a chunk?

An **`AIMessageChunk` object**, not a string:

```
{ text: "Hel", tool_call_chunks: [...], id: "...", ...metadata }
```

### Why not `aiMessage += chunk.text` anymore?

`+= chunk.text` saves **only the text**. That was fine when the AI could only talk.
Now the AI can **call tools**, and tool calls arrive in pieces inside `tool_call_chunks`, **not** inside `text`:

```
chunk 1 → text: ""   args: '{"fil'
chunk 2 → text: ""   args: 'es":[{"path":"C:\\...'
chunk 3 → text: ""   args: '..."}]}'
```

❗ With `+=`, you'd keep only `""` and **lose the tool call**.

### What does `.concat()` do?

It works like `+=`, but merges the **whole object** instead of just the text:

```js
// strings: join the text only
"Hel" + "lo"  →  "Hello"

// chunks: join every field
{ text: "Hel", args: '{"pa' }.concat({ text: "lo", args: 'th":1}' })
  →  { text: "Hello", args: '{"path":1}' }
```

- text → joined
- tool call pieces → joined into full JSON args
- id, name, metadata → kept

❓ `.concat()` **does not change** `aiMessage`. It **returns a new** merged chunk, so you have to save it back: `aiMessage = aiMessage.concat(chunk)`.

After the loop:
- `aiMessage.text` → the full reply text
- `aiMessage.tool_calls` → the full tool calls (name + args)

That's why we return `aiMessage` directly instead of `new AIMessage(text)`. Wrapping only the text would throw away `tool_calls`.

---

## 🛠️ 9. Tools: letting the AI *do* things

File: `src/ai/tools/file.tool.js`

```js
export const upsertFileTool = tool(
  async ({ files }) => {                         // 1. the real code that runs
    await Promise.all(files.map(f => fs.writeFile(f.path, f.content)));
    return "Files created/updated successfully";
  },
  {
    name: "upsertFileTool",                      // 2. name the AI uses
    description: "Create/Update multiple files", // 3. tells the AI WHEN to use it
    schema: z.object({                           // 4. which args the AI must send
      files: z.array(z.object({
        path: z.string().describe("Absolute path"),
        content: z.string().describe("File content"),
      })),
    }),
  }
);
```

- **upsert** = up**date** + in**sert**: create the file if it's missing, update it if it exists.
- **`Promise.all`** writes all files at the same time and waits for all of them to finish.
- **`zod` schema + `.describe()`** tells the AI exactly what arguments to send.

### `bindTools`

```js
const modelWithTool = model.bindTools([upsertFileTool]);
```

❗ This only **tells the AI the tool exists**. The AI then replies "I want to call `upsertFileTool` with these args" (`aiMessage.tool_calls`). **The AI never runs the tool itself. Our code has to run it.**

### Next step (not done yet)

1. Add a **`ToolNode`** (from `@langchain/langgraph/prebuilt`) that reads `tool_calls` and runs the tool.
2. Add a **conditional edge**:
   - The last message has `tool_calls` → go to the ToolNode, then back to `LLMNode`.
   - No `tool_calls` → `END`.

This loop (AI → tool → AI → …) is what makes it a real **AI agent**.

---

## 🪟 10. Why Windows paths show so many backslashes `\\\\`

The path in the logs looked like `C:\\\\Users\\\\mohda...`, but it's actually correct.

- In JSON, `\` is a special escape character, so one real `\` is written as `\\`.
- The tool args are a JSON string **inside** another JSON log, so it doubles again: `\\\\`.
- Mac/Linux (like sir's laptop) use `/`, which never needs escaping. That's why sir's logs look clean.

| What you see | Meaning |
|---|---|
| `C:\\\\Users` | escaped twice (log output) |
| `C:\\Users` | escaped once (JSON string) |
| `C:\Users` | ✅ the real path |

---

## 🎨 11. Better Comments tags (VS Code extension)

| Tag | Color | Use it for |
|---|---|---|
| `//*` | 🟢 green | Important explanation / heading |
| `//!` | 🔴 red | Warning, "don't do this" |
| `//?` | 🔵 blue | Question, or a tricky detail |
| `//TODO` | 🟠 orange | Something to do later |
| `////` | ~~strikethrough~~ | Old code that's commented out |
| `/** ... */` | JSDoc | Describes a function (shows up on hover) |
