import { END, START, StateGraph } from "@langchain/langgraph";
import * as z from "zod";


/**
 * @description A node is just a function
 * @param {object} state - The current state of the graph
 * @returns {object} The modified state
 * state = {
 *   messages: [ z.any() ]
 * }
 */
const LLMNode = async (state) => {  // state is the data
  console.log("LLMNode State:", state)

  return {  // modifing & returning the state
    messages: [
      ...state.messages,
      {
        role: "assistant",
        content: "Hey, I'm great. How can I assist you today" // Hardcoded AI response
      }
    ]
  }
}


const graph = new StateGraph(
  //* state schema
  z.object({
    messages: z.array(z.any())
  })
)
  .addNode("LLMNode", LLMNode)  //* Initializing a node (function `LLMNode`)
  .addEdge(START, "LLMNode")    // Adding an edge (linking `START` to `LLMNode`)
  .addEdge("LLMNode", END)      // Adding an edge (linking `LLMNode` to `END`)
  .compile()


const graphResponse = await graph.invoke({
  messages: [
    {
      role: "user",
      content: "Hey, how are u??" // User input
    }
  ]
})

console.log("Graph Response:", graphResponse)