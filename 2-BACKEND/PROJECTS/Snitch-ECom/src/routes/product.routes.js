import { Router } from 'express'
import mutler from 'multer'
import { authenticate, authenticateSeller } from '../middlewares/auth.middleware.js'
import { createProductValidator, listProductValidator, unlistProductValidator } from '../validators/product.validator.js'
import {
  createProductController,
  listAllProductsController,
  listAllProductsToSellerController,
  listProductController,
  unlistProductController
} from '../controllers/product.controller.js'

const router = Router()


const upload = mutler({
  storage: mutler.memoryStorage(),
  limits: {
    files: 5,
    fileSize: 1 * 1024 * 1024 // 1MB
  }
})



/**
 * @method POST
 * @route /api/products
 * @description creates the product and save its data into the DB, images will be store on imagekit.
 * @access seller
 * req.body=>{title,description:price:{amount,currency},sizes:[{size,stock},{si–ze,stock}]}
 */
router.post("/",
  // ------------- check is user authenticate ------------- 
  authenticate,
  // ------------- check the role is seller or not -------------
  authenticateSeller,
  // ------------- required for reading the data from req.body if the formate is form-data(multipart-form-data) -------------
  upload.array("images", 5),
  // ------------- parse the complex data like object and array into json -------------
  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price))
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes))
    next()
  },
  // ------------- validate the req.body -------------
  createProductValidator,
  // ------------- create the product -------------
  createProductController
)



/**
 * @method GET
 * @route /api/products
 * @description Read all the published products from the DB
 * @access user
 */
router.get("/", authenticate, listAllProductsController)



/**
 * @method GET
 * @route /api/products/seller
 * @description Read all the products from the DB
 * @access seller
 */
router.get("/seller", authenticate, authenticateSeller, listAllProductsToSellerController)



/**
 * @method PATCH
 * @route /api/products/unlist/:id
 * @description list a product by its ID
 * @access seller
 */
router.patch("/list/:id",
  authenticate,
  authenticateSeller,
  listProductValidator,
  listProductController
)



/**
 * @method PATCH
 * @route /api/products/unlist/:id
 * @description Unlist a product by its ID
 * @access seller
 */
router.patch("/unlist/:id",
  authenticate,
  authenticateSeller,
  unlistProductValidator,
  unlistProductController
)



export default router