import generateCode from '../utils/generateCode.js'
import URLModel from '../models/url.model.js'

const DEMO_URL = 'https://shorten.url/demo/dispatch?source=link-ledger'

export const createURL = async (req, res) => {

  const { url } = req.body

  if (!url || url.trim() === '') return res.status(400).json({ error: 'Please enter a URL' })

  if (url.trim() === DEMO_URL) {
    return res.status(400).json({
      error: "This is a demo link and cannot be created. Try another URL."
    })
  }

  const existingUrl = await URLModel.findOne({ originalUrl: url })

  if (existingUrl) return res.status(400).json({ "error": "URL already exists" })

  if (
    url.startsWith('http://') === false &&
    url.startsWith('https') === false
  ) {
    return res.status(400).json({
      "error": "Please enter a valid URL starting with http:// or https://"
    })
  }

  if (url > 2048) return res.status(400).json({ "error": "URL is too long" })


  const code = generateCode()

  const newURL = await URLModel.create({
    originalUrl: url,
    shortCode: code
  })

  res.status(201).json({
    message: "URL shortened successfully",
    data: {
      originalUrl: newURL.originalUrl,
      shortCode: newURL.shortCode,
    }
  })
}

export const getAllURLs = async (req, res) => {
  const urls = await URLModel.find()

  return res.status(200).json({
    message: "URLs fetched successfully",
    data: {
      urls
    }
  })
}


export const redirectToOriginal = async (req, res) => {

  const { code } = req.params

  const matchedUrl = await URLModel.findOne({
    shortCode: code
  })

  if (!matchedUrl) {
    return res.status(404).json({ error: "URL not found" })
  }

  res.redirect(302, matchedUrl.originalUrl)

  await URLModel.findOneAndUpdate({ shortCode: code }, {
    $inc: {
      clicks: 1
    }
  })

}


export const deleteURL = async (req, res) => {
  const { id } = req.params

  const url = await URLModel.findById(id)

  if (!url) {
    return res.status(404).json({
      message: "URL not found"
    })
  }

  await URLModel.findByIdAndDelete(id)

  res.status(200).json({
    message: "URL deleted successfully"
  })

}