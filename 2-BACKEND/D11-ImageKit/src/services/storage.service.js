// import ImageKit from "imagekit";
import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";
dotenv.config();

const storageInctance = new ImageKit({
  // urlEndpoint: process.env.IMAGEKIT_URL,
  // publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY
})

export const sendFile = async (file, fileName) => {
  return await storageInctance.files.upload({
    file,
    fileName, // the key 'fileName' 's 'N' MUST be capital
    folder: 'cohort-3'
  })
}