import "dotenv/config";
import { PDFParse } from "pdf-parse";
import fs from "fs/promises"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { CohereEmbeddings } from "@langchain/cohere";
import { Pinecone } from "@pinecone-database/pinecone";

const parser = new PDFParse({
  data: await fs.readFile("./story.pdf")
})

//* --------------------- Extract All The Text From The PDF ---------------------
const text = (await parser.getText({ pageJoiner: "" })).text



//* --------------------- Split The Text Into Chunks ---------------------
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 100
})


const chunks = await textSplitter.splitText(text)



//* --------------------- Initialize Embeddings [embedding model - Cohere] ---------------------
const embedding = new CohereEmbeddings({
  model: "embed-v5.0-fast",
  apiKey: process.env.COHERE_API_KEY
})


//* --------------------- Embed The Text Chunks Into Vectors ---------------------
const ventors = await embedding.embedDocuments(chunks)



//* --------------------- Initialize Pinecone Client ---------------------
const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
})

const index = pc.Index({
  name: "cohort-rag",
  host: "https://cohort-rag-oza0ud3.svc.aped-4627-b74a.pinecone.io"
})

await index.documents.upsert({
  documents: ventors.map((ventor, index) => ({
    _id: `chunk-${index}`,
    embedding: ventor,
    content: chunks[index]
  }))
})