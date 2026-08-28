const express = require('express')
const connectDB = require('./config/db')
const notesRouter = require('./routes/notes.route')
const cors = require('cors')

const app = express()
app.use(express.json())

connectDB()

// app.use(cors("*")) This allows everything
app.use(
  cors({
    origin: 'http://localhost:5173'
  })
)


app.use('/notes', notesRouter)


module.exports = app