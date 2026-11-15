import { StateGraph, START, END } from "@langchain/langgraph";
import { HumanMessage } from "langchain";
import * as z from "zod";
import { LLMNode } from "./node.js";
import rl from "./utils/readline.util.js";


const stateFormat = z.object({
  messages: z.array(z.any()),
})


const graph = new StateGraph(stateFormat)
  .addNode("LLMNode")
  .addEdge(START, LLMNode)
  .addEdge(LLMNode, END)
  .compile()


export default async function initGraph() {

  while (true) {
    const userInput = await rl.question("[User]: ")

    const response = await graph.invoke({
      messages: [
        new HumanMessage(userInput)
      ]
    });

  }

  console.log("[Bot]: ", response);

}