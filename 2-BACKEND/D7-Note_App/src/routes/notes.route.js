const express = require('express')
const router = express.Router()

const {
  createNoteController,
  getAllNotesController,
  getSingleNoteController,
  updateNoteController,
  deleteNoteController
} = require('../controllers/notes.controller')

// CREATE
router.post('/create', createNoteController)

// READ
router.get('/all', getAllNotesController)

// READ ONE
router.get('/:id', getSingleNoteController)

// UPDATE VIA PUT
router.put('/update/:id', updateNoteController)

// DELETE
router.delete('/delete/:id', deleteNoteController)


module.exports = router