import { ChatGroq } from "@langchain/groq";
import { getApiKey } from "../../utils/file.util.js";
import { AIMessage } from "langchain";
import { upsertFileTool } from "../tools/file.tool.js";



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
  //   model,
  //   tools: [upsertFileTool]
  // })
  //* OR
  const modelWithTool = model.bindTools([upsertFileTool]);


  const stream = await modelWithTool.stream(state.messages);

  process.stdout.write("[Bot]: ");


  let aiMessage = "";

  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
    console.log(chunk);

    aiMessage += chunk.text;
  }

  process.stdout.write(`\n`)

  return {
    messages: [
      ...state.messages,
      new AIMessage(aiMessage)
    ]
  }

}