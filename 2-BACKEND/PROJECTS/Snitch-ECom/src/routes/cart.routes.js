import { Router } from "express"
import { addProductToCartController, getCartController } from "../controllers/cart.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { addToCartValidator } from "../validators/cart.validator.js";


const router = Router()


/**
 * @method POST
 * @route /api/cart
 * @param req.body { productId, quantity, size }
 * @access protected
 * @description Add an product to the user's cart
 */
router.post("/", authenticate, addToCartValidator, addProductToCartController)



/**
 * @method GET
 * @route /api/cart
 * @access protected
 * @description Get the user's cart
 */
router.get("/", authenticate, getCartController)



export default router