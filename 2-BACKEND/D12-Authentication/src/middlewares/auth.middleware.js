import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import UserModel from '../models/user.model.js'

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      message: "Token not found"
    })
  }

  // const decode = jwt.decode(token)
  const decode = jwt.verify(token, process.env.JWT_SECRET)

  const user = await UserModel.findById(decode.id)

  console.log(user);

  req.user = user

  next()
}