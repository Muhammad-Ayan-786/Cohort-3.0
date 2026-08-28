const multer = require('multer')

// disk storage for LOCAL
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

// cloud/memory storage for SERVER (include buffer)
const memoryStorage = multer.memoryStorage()

const upload = multer({ storage })

module.exports = upload