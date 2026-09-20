import { body, validationResult } from 'express-validator'

export const registerValidation = [
  body('email')
    .exists().withMessage('Email is required')
    .isEmail().withMessage('Invalid email'),
  body('phone')
    .exists().withMessage('Phone number is required')
    .isLength({ min: 10, max: 10 }).withMessage('Invalid phone number'),
  body('password')
    .exists().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

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