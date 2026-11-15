import { tool } from "langchain";
import * as z from "zod";
import fs from "fs/promises";

/**
 * @description Create/Update multiple files at once (create if doesn't exist)
 */
export const upsertFileTool = tool(
  async ({ files }) => {

    await Promise.all(files.map(file => {
      console.log(file.path);

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