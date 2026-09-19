import express from 'express'
import cors from 'cors'
import URLRouter from '../routes/url.routes.js'
import { redirectToOriginal } from '../controllers/url.controller.js'
import config from '../config/config.js'

const app = express()

app.use(express.json())
app.use(cors({
  origin: config.FRONTEND_URL
}))


app.use('/api/urls', URLRouter)

app.get('/:code', redirectToOriginal)


export default app