const Note = require('../models/notes.model')

// C - Create
const createNoteController = async (req, res) => {
  try {

    let { title, description } = req.body

    const newNote = await Note.create({
      title,
      description
    })

    return res.status(201).json({
      message: "Note created successfully",
      data: newNote
    })

  } catch (error) {
    console.log('error in creating note', error)
    return res.status(500).json({
      message: "Error in creating note",
      data: error
    })
  }
}

// R - Read
const getAllNotesController = async (req, res) => {
  try {

    const allNotes = await Note.find()

    return res.status(200).json({
      message: "All notes fetched successfully",
      data: allNotes
    })

  } catch (error) {
    console.log('error in getting all notes', error)
    return res.status(500).json({
      message: "Error in getting all notes",
      data: error
    })
  }
}

// R - 1 Note
const getSingleNoteController = async (req, res) => {
  try {

    const { id } = req.params

    const oneNote = await Note.findById(id)

    return res.status(200).json({
      message: "One note fetched successfully",
      data: oneNote
    })

  } catch (error) {
    console.log('error in getting one note', error)
    return res.status(500).json({
      message: "Error in getting one note",
      data: error
    })
  }
}

// U - Put
const updateNoteController = async (req, res) => {
  try {

    const noteID = req.params.id

    const updatedNote = await Note.findByIdAndUpdate(noteID, req.body, {
      new: true // show updated note instantly
    })

    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote
    })

  } catch (error) {
    console.log('error in updating note', error)
    return res.status(500).json({
      message: "Error in updating note",
      data: error
    })
  }
}

// U - Patch
const singleEntityNoteController = async (req, res) => {
  try {

    const noteID = req.params.id

    const updatedNote = await Note.findByIdAndUpdate(noteID, req.body, {
      new: true // show updated note instantly
    })

    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote
    })

  } catch (error) {
    return res.status(500).json({
      message: "Error in updating note",
      data: error
    })
  }
}

// D
const deleteNoteController = async (req, res) => {
  try {

    const noteID = req.params.id

    const deletedNote = await Note.findByIdAndDelete(noteID)

    return res.status(200).json({
      message: "Note deleted successfully",
      data: deletedNote
    })

  } catch (error) {
    console.log('error in deleting note', error)
    return res.status(500).json({
      message: "Error in deleting note",
      data: error
    })
  }
}


module.exports = {
  createNoteController,
  getAllNotesController,
  getSingleNoteController,
  updateNoteController,
  deleteNoteController,
  singleEntityNoteController
}