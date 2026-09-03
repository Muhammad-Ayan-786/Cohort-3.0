import PostModel from "../models/post.model.js";
import { sendFile } from "../services/storage.service.js";

export const createPost = async (req, res) => {
  try {

    const { caption } = req.body;
    const file = req.file

    if (!caption || !file) {
      return res.status(400).json({
        success: false,
        message: "Caption and image are required"
      })
    }

    const uploadedFile = await sendFile(file.buffer, file.originalname)

    console.log(uploadedFile);

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: {
        caption,
        image: uploadedFile.url
      }
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}