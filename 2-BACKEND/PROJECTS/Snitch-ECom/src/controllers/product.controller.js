import ProductModel from "../models/product.model.js"
import { uploadFile } from "../services/storage.service.js"


export async function createProductController(req, res) {

  const { title, description, price, sizes, } = req.body

  const uploadPromises = req.files.map(file => (
    uploadFile({
      buffer: file.buffer,
      fileName: file.originalname
    })
  ))


  const uploadResponses = await Promise.all(uploadPromises)

  const images = uploadResponses.map(response => response.url)

  const product = await ProductModel.create({
    title,
    description,
    images,
    price,
    sizes,
    seller: req.user.userId
  })

  return res.status(201).json({
    message: "Product created successfully",
    data: {
      product
    }
  })

}


export async function listAllProductsController(req, res) {
  const products = await ProductModel.find({ published: true })

  return res.status(200).json({
    message: "Products data fetched successfully",
    data: {
      products
    }
  })
}



export async function listAllProductsToSellerController(req, res) {

  const products = await ProductModel.find({})

  return res.status(200).json({
    message: "All products fetched successfully",
    data: {
      products
    }
  })
}



export async function listProductController(req, res) {
  const { id } = req.params

  const product = await ProductModel.findById(id)

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    })
  }

  // ---------------- make product unPublished ----------------
  await ProductModel.findByIdAndUpdate(id, { published: true })

  return res.status(200).json({
    message: "Product published successfully"
  })
}



export async function unlistProductController(req, res) {
  const { id } = req.params

  const product = await ProductModel.findById(id)

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    })
  }

  // ---------------- make product unPublished ----------------
  await ProductModel.findByIdAndUpdate(id, { published: false })

  return res.status(200).json({
    message: "Product unpublished successfully"
  })
}