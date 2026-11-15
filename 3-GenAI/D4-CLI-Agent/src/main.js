import { getApiKey, getSettingsFile, saveApiKey } from "./utils/file.util.js";
import rl from "./utils/readline.util.js";

async function main() {

  // console.log("Hello from your new CLI tool!");

  const settings = await getSettingsFile();

  if (!settings.apiKey) {
    const apiKey = await rl.question("Please enter your API key: ");
    await saveApiKey(apiKey);
  }

  const apiKey = await getApiKey();
  console.log(apiKey);


  rl.close()

}

export default main;