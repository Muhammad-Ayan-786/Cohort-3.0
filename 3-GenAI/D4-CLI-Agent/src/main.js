import initGraph from "./graph/graph.js";
import { getApiKey, getSettingsFile, saveApiKey } from "./utils/file.util.js";
import rl from "./utils/readline.util.js";

async function main() {

  // console.log("Hello from your new CLI tool!");

  const settings = await getSettingsFile();

  if (!settings.apiKey) {
    const apiKey = await rl.question("Please enter your API key: ");
    await saveApiKey(apiKey);
  }

  const response = await getApiKey();

  if (response.error) {
    console.log("Invalid Or Expired API Key");
    const apiKey = await rl.question("Please enter your API key: ");
    await saveApiKey(apiKey);
    return main();
  }

  const apiKey = response.apiKey;


  await initGraph()


  rl.close()

}

export default main;