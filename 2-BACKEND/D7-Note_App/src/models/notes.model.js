const { default: mongoose } = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    minLength: [3, 'Description must be at least 3 characters long']
  },
})

const Note = mongoose.model('Note', notesSchema)

module.exports = Note