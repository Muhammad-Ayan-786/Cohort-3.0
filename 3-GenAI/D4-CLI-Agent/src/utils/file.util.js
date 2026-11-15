import fs from "fs/promises";
//* File system module from Node.js to perform file operations (CRUD)

import path from "path";
import { CONFIG_DIR } from "./constant.js";
import axios from "axios";


/**
 ** Return the content of the settings file (create if doesn't exist)
 */
export async function getSettingsFile() {

  //* Ensure the config dir exists
  try {
    await fs.access(CONFIG_DIR);  // Check if config dir exists (User/mohda/.beta)
  } catch (error) {
    await fs.mkdir(CONFIG_DIR, { recursive: true });  // Create config dir
    // Create parent directories if they don't exist using (recursive: true) ex: User/mohda
  }

  //* Add the path of the settings file to the config dir (User/mohda/.beta/settings.json)
  const settingsFilePath = path.join(CONFIG_DIR, "settings.json")


  //* Check if settings file exists
  try {
    await fs.access(settingsFilePath); // Check if settings file exists
    const content = await fs.readFile(settingsFilePath, "utf-8");  // Read settings file

    return JSON.parse(content); // Return file's content in JSON

  } catch (error) {
    await fs.writeFile(settingsFilePath, JSON.stringify({}));  //  Create settings file
    return {};  // Return empty object
  }

}

/**
 ** Save api key to the settings file
 */
export async function saveApiKey(apiKey) {

  const settingsFilePath = path.join(CONFIG_DIR, "settings.json");

  const settingsContent = await getSettingsFile();  // Get settings file's content

  await fs.writeFile(settingsFilePath, JSON.stringify({
    ...settingsContent,
    apiKey
  }));
}


/**
 ** Get api key from the settings file
 */
export async function getApiKey() {
  const settingsContent = await getSettingsFile();
  const apiKey = settingsContent.apiKey || null;

  if (!apiKey) {
    return {
      error: "API key not found in settings file"
    }
  }

  try {

    const response = await axios.get("https://api.groq.com/openai/v1/models", {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })

    return {
      apiKey
    }

  } catch (error) {
    return {
      error: "Invalid API key"
    }
  }
}