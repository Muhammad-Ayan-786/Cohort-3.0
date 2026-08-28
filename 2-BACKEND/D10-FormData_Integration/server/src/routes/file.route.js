const express = require('express');
const upload = require('../config/multer');
const router = express.Router();

router.post('/single', upload.single('image'), (req, res) => {
  try {

    return res.status(201).json({
      message: "Image uploaded successfully",
      file: req.file
    })

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    })
  }
})

router.post('/multiple', upload.array('images', 5), (req, res) => {
  try {

    console.log(req.files);

    return res.status(201).json({
      message: "Images uploaded successfully",
      files: req.files
    })

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    })
  }
})

module.exports = router;