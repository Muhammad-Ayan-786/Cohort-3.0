import { tool } from "langchain";
import * as z from "zod";
import fs from "fs/promises";

/**
 * @description Create/Update multiple files at once (create if doesn't exist)
 */
export const upsertFileTool = tool(
  async ({ files }) => {

    await Promise.all(files.map(file => {
      return fs.writeFile(file.path, file.content);
    }))

    return "Files created/updated successfully";

  },
  {
    name: "upsertFileTool",
    description: "Create/Update multiple files at once (create if doesn't exist)",
    schema: z.object({
      files: z.array(z.object({
        path: z.string().describe("Absolute path of the file to be created/updated"),
        content: z.string().describe("Content of the file to be created/updated")
      }))
    })
  }
)


/**
 * List all the folder (recursively) and files in the current folder (ignore folders like node_modules)
 */
export const listFilesTool = tool(
  async function ({ folder }) {

    const results = []

    async function traverse(currentFolder) {
      const entries = await fs.readdir(currentFolder, { withFileTypes: true })

      for (const entry of entries) {
        const fullPath = `${currentFolder}/${entry.name}`

        if (entry.isDirectory()) {
          if (entry.name === "node_modules") continue
          await traverse(fullPath)
        } else {
          results.push(fullPath)
        }
      }
    }

    await traverse(folder)
    return JSON.stringify(results)
  },
  {
    name: "listFilesTool",
    description: "List all the folder (recursively) and files in the current folder (ignore folders like node_modules)",
    schema: z.object({
      folder: z.string().describe("absolute path of the folder to list")
    })
  }
)


/**
 * @description Read the content of multiple files at once
 */
export const readFileTool = tool(
  async ({ files }) => {

    const results = await Promise.all(files.map(async file => {
      const content = await fs.readFile(file.path, "utf-8");
      return { path: file.path, content }
    }))

    return JSON.stringify(results);
  },
  {
    name: "readFileTool",
    description: "Read the content of multiple files at once",
    schema: z.object({
      files: z.array(z.object({
        path: z.string().describe("Absolute path of the file to be read")
      }))
    })
  }
)


/**
 * @description Delete multiple files at once
 */
export const deleteFileTool = tool(
  async ({ files }) => {

    await Promise.all(files.map(file => {
      return fs.unlink(file.path);
    }))

    return "Files deleted successfully";
  },
  {
    name: "deleteFileTool",
    description: "Delete multiple files at once",
    schema: z.object({
      files: z.array(z.object({
        path: z.string().describe("Absolute path of the file to be deleted")
      }))
    })
  }
)