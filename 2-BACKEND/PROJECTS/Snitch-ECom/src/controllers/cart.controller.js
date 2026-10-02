import CartModel from "../models/cart.model.js"
import ProductModel from "../models/product.model.js"


export const addProductToCartController = async (req, res) => {
  const { productId, quantity, size } = req.body

  const product = await ProductModel.findById(productId)

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    })
  }


  const selectedSize = product.sizes.find(s => s.size === size)

  if (!selectedSize) {
    return res.status(400).json({
      message: "Invalid size"
    })
  }

  // console.log("User Selected Size:", selectedSize)


  if (quantity > selectedSize.stock) {
    return res.status(400).json({
      message: "Quantity exceeds stock"
    })
  }

  // let cart = await CartModel.findOne({ user: req.user.userId })

  // if (!cart) {
  //   cart = await CartModel.create({ user: req.user.userId })
  // }


  // Shortened version
  const cart =
    (await CartModel.findOne({ user: req.user.userId })) ??
    (await CartModel.create({ user: req.user.userId }))

  const isProductInCart = cart.products.find(p => (p.product.toString() === productId) && (p.size === size))

  // console.log("Check if product exist is cart", isProductInCart);


  if (isProductInCart) {

    if ((isProductInCart.quantity + quantity) > selectedSize.stock) {
      return res.status(400).json({
        message: "Quantity exceeds stock"
      })
    }

    await CartModel.updateOne(
      {
        user: req.user.userId,
        "products.product": productId,
        "products.size": size
      },
      {
        $inc: {
          "products.$.quantity": quantity
        }
      }
    )

    return res.status(200).json({
      message: "Product quantity updated successfully in cart"
    })
  }


  await CartModel.findOneAndUpdate(
    { user: req.user.userId },
    {
      $push: {
        products: {
          product: productId,
          quantity,
          size
        }
      }
    }
  )

  return res.status(200).json({
    message: "Product added to cart successfully"
  })

}


export const getCartController = async (req, res) => {
  const cart = (await CartModel.findOne({ user: req.user.userId }))
    ?? (await CartModel.create({ user: req.user.userId }))


  return res.status(200).json({
    message: "Cart retrieved successfully",
    data: {
      cart
    }
  })
}