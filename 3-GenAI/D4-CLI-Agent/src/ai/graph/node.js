import chalk from "chalk";
import { ChatGroq } from "@langchain/groq";
import { getApiKey } from "../../utils/file.util.js";
import { upsertFileTool, readFileTool, listFilesTool, deleteFileTool } from "../tools/file.tool.js";
import * as fileTools from "../tools/file.tool.js";
import rl from "../../utils/readline.util.js";
import { ToolMessage } from "langchain";


/**
 * Handles the LLM node logic for the state graph.
 * @param {Object} state - The current state of the state graph.
 * @param {Object} config - The configuration for the LLM node.
 * @returns {Promise} - The update state after processing.
 */
export async function LLMNode(state, config) {
  // console.log(config); { username: 'Mohd Ayan' }

  const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: (await getApiKey()).apiKey
  })

  // const agent = new createAgent({
  //   model, tools: [upsertFileTool]
  // })
  //* OR
  const modelWithTool = model.bindTools(
    [upsertFileTool, readFileTool, listFilesTool, deleteFileTool]
  );

  const stream = await modelWithTool.stream(state.messages);

  process.stdout.write(chalk.green.bold("[AI]: "));


  let aiMessage = "";

  //* Merge stream chunks into one full message (text + tool calls). See NOTES.md
  for await (const chunk of stream) {
    process.stdout.write(chunk.text);

    if (!aiMessage) aiMessage = chunk
    else aiMessage = aiMessage.concat(chunk)
  }

  process.stdout.write(`\n`)

  return {
    messages: [
      ...state.messages,
      aiMessage
    ]
  }

}


/**
 * Handle the tool_calls from AI
 * @param {Object} state - The current state of the state graph.
 * @returns {Promise} - The updated state after handling tool calls.
 */
export async function ToolNode(state, config) {

  const lastMessage = state.messages[state.messages.length - 1]
  const toolCalls = lastMessage.tool_calls

  /**
   * * toolCalls is an array of tool calls from AI
   * tool_calls = [
   *  {
   *   name: "upsertFileTool",
   *   args: {
   *     files: [
   *       { path: "/index.html", content: "<html></html>" }
   *     ]
   *   },
   *   id: "fc_7876c77d-08d5-47e3-b768-f29182faa694",
   *   "type": "tool_call"
   *  }
   * ]
   * 
   * * fileTools is an object of tools   *
   * fileTools = {
   *  upsertFileTool: TOOL - Handle file uploads and updates
   * }
   */

  //* AI won't ask for permissions with this code
  // const toolResults = await Promise.all(toolCalls.map(async toolCall => {
  //   return await fileTools[toolCall.name].invoke(toolCall)
  // }))


  //* AI will ask for permissions with the following code
  const toolResults = []

  for (const toolCall of toolCalls) {

    switch (toolCall.name) {
      case "upsertFileTool":
        process.stdout.write(chalk.yellow(`[Tool]: Updating/Creating files `) + chalk.gray(`${JSON.stringify(
          toolCall.args.files.map(file => file.path).join(", ")
        )}\n`))
        const userInput = await rl.question(chalk.magenta("Do you want to proceed? (yes/no): "));
        if (userInput.toLowerCase() !== "yes") {
          process.stdout.write(chalk.red("Aborting file updates\n"))
          toolResults.push(new ToolMessage({
            content: "User aborted file updates/creations",
            tool_call_id: toolCall.id
          }))
          break;
        }
        const result = await fileTools.upsertFileTool.invoke(toolCall)
        toolResults.push(result)
        break;

      case "deleteFileTool":
        process.stdout.write(chalk.red(`[Tool]: Deleting files `) + chalk.gray(`${JSON.stringify(
          toolCall.args.files.map(file => file.path).join(", ")
        )}\n`))
        const userInput2 = await rl.question(chalk.magenta("Do you want to proceed? (yes/no): "));
        if (userInput2.toLowerCase() !== "yes") {
          process.stdout.write(chalk.red("Aborting file deletions\n"))
          toolResults.push(new ToolMessage({
            content: "User aborted file deletions",
            tool_call_id: toolCall.id
          }))
          break;
        }
        const deleteResult = await fileTools.deleteFileTool.invoke(toolCall)
        toolResults.push(deleteResult)
        break;

      case "readFileTool":
        process.stdout.write(chalk.yellow(`[Tool]: Reading files `) + chalk.gray(`${JSON.stringify(
          toolCall.args.files.map(file => file.path).join(", ")
        )}\n`))
        const readResult = await fileTools.readFileTool.invoke(toolCall)
        toolResults.push(readResult)
        break;

      case "listFilesTool":
        process.stdout.write(chalk.yellow(`[Tool]: Listing files\n`))
        const listResult = await fileTools.listFilesTool.invoke(toolCall)
        toolResults.push(listResult)
        break;

      default:
        process.stdout.write(chalk.red(`[Tool]: Unknown tool ${toolCall.name}\n`))
        toolResults.push(new ToolMessage({
          content: `Tool "${toolCall.name}" does not exist. Use only the provided tools.`,
          tool_call_id: toolCall.id
        }))
        break;
    }
  }


  return {
    messages: [
      ...state.messages,
      ...toolResults
    ]
  }

}