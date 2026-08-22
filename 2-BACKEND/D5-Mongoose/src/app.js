const express = require('express')
const connectDB = require('./config/db')
const NotesModel = require('./models/notes.model')

const app = express()
app.use(express.json())

connectDB()

app.get("/", async (req, res) => {
  let notes = await NotesModel.find()

  res.send({
    success: true,
    message: "Notes fetched successfully",
    data: notes
  })
})

app.post('/create-note', async (req, res) => {
  let { title, description } = req.body


  let newNote = await NotesModel.create({
    title,
    description
  })


  res.send({
    success: true,
    message: "Note created successfully",
    data: newNote
  })

})


module.exports = app