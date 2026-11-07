import "dotenv/config";

import { ChatGroq } from "@langchain/groq";
import rl from "readline/promises";


/**
 * Readline - A package to get user input in terminal
 * Create a readline interface with process.stdin, process.stdout as input and output
 */
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})


/**
 * Create a new instance of ChatGroq
 * @model - The model to use
 * @apiKey - The api key to use
 */
const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY
})


while (true) {
  const userInput = await readline.question("Enter your input: ");

  // const AiResponse = await model.invoke(userInput); // invoke - give complete ans 
  // console.log(AiResponse.content);

  process.stdout.write("\n");

  const streamAiRes = await model.stream([
    {
      role: "user",
      content: userInput
    }
  ])
  // Print the res token by token (streaming)

  for await (const chunk of streamAiRes) {
    process.stdout.write(chunk.content); // chunk.text (same thing)
  } // for await - print the res token by token

  process.stdout.write("\n\n");

}