import 'dotenv/config';

import { ChatGroq } from '@langchain/groq';
import { createAgent, tool } from 'langchain';
import rl from 'readline/promises';
import * as z from 'zod';

//* ----------------- Event Calendar (Agent Tools) ----------------- */
const events = []

const createEventTool = tool(
  //* the function to call. And params must be an object
  async ({ date, title, description }) => {
    // console.log("Creating event", { date, title, description })
    events.push({ date, title, description })
    return "Event created"
  },
  //* the description/details of the function (Zod schema)
  {
    name: "create_event",
    description: "Create a new event in your calendar using date, title, and description",
    schema: z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
    })
  }
)

const getEventsTool = tool(
  async ({ }) => {
    // console.log("Getting events", events)
    return events
  },
  {
    name: "get_events",
    description: "Get all events in your calendar",
    schema: z.object({})
  }
)


//* ----------------- User Input ----------------- */
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})


//* ----------------- Chat Model ----------------- */
const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY
})


//* ----------------- Agent with Tools ----------------- */
const agent = createAgent({
  model,
  tools: [createEventTool, getEventsTool],
})


//* ----------------- Main Loop ----------------- */

const messages = [] // Memory var

while (true) {
  const userInput = await readline.question("User: ")

  if (userInput.trim().toLowerCase() === "/exit") {
    readline.close()
    break
  }

  messages.push({ role: "user", content: userInput })

  const stream = await agent.stream(
    // { messages: [{ role: "user", content: userInput }] }, When not maintaining memory
    { messages: messages },
    { streamMode: "messages" }
  )

  process.stdout.write(`\nAI: `)

  let aiResponse = ""

  for await (const [chunk] of stream) {
    aiResponse += chunk.content
    process.stdout.write(chunk.content)
  }

  messages.push({ role: "assistant", content: aiResponse })

  process.stdout.write(`\n\n`)
}
