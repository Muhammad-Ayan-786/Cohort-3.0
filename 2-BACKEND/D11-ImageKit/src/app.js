import express from "express";
import postRouter from "./routes/post.route.js";

const app = express();
app.use(express.json());

app.use('/api/post', postRouter)

export default app