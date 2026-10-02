import { body, validationResult } from "express-validator";

export const addToCartValidator = [
  body("productId")
    .exists().withMessage("Product Id is required").bail()
    .isString().withMessage("Product Id must be a string value").bail()
    .isMongoId().withMessage("Product Id must be a valid Mongo Id"),

  body("quantity")
    .exists().withMessage("Quantity is required").bail()
    .isInt({ min: 1 }).withMessage("Quantity must be an integer & greater than 0").bail(),

  body("size")
    .exists().withMessage("Sizes are required").bail()
    .isString().withMessage("Sizes must be a string value").bail()
    .isIn(
      ["XS", "S", "M", "L", "XL", "XXL"]
    ).withMessage("Sizes can be one of these XS, S, M, L, XL, XXL."),


  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Request",
        errors: errors.array()
      })
    }

    next()
  }
]