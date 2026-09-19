import dotenv from 'dotenv'

dotenv.config()

const config = {
  MONGO_URI: process.env.MONGO_URI,
  FRONTEND_URL: process.env.FRONTEND_URL,
  PORT: process.env.PORT
}

export default config