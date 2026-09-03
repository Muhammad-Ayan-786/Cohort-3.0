import express from "express";
import { createPost } from "../controllers/post.controller.js";
import { upload } from "../config/mutler.config.js"

const router = express.Router();

router.post("/create", upload.single('image'), createPost);

router.get("/", (req, res) => res.send("Post route"))

export default router