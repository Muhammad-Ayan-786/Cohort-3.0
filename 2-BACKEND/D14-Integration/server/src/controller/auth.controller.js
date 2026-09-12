import UserModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken
} from '../utils/auth.js'

export const registerController = async (req, res) => {
  const { name, email, password } = req.body

  const isUserExists = await UserModel.findOne({ email })

  if (isUserExists) {
    res.status(400).json({
      message: "User already exists",
      errors: [
        {
          field: "email", // either use 'field' or 'path'
          message: "User already exists"
        }
      ]
    })
  }

  const user = await UserModel.create({
    name,
    email,
    passwordHast: await bcrypt.hash(password, 12)
  })


  const { accessToken, refreshToken } = generateTokens({ userId: user._id })

  user.refreshToken = refreshToken
  await user.save()

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true
  })

  res.status(201).json({
    message: "User created successfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      accessToken
    }
  })
}

export const meController = async (req, res) => {
  const accessToken = req.headers.authorization?.split(' ')[1]

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized, access token not found",
    })
  }

  try {

    const decoded = verifyAccessToken(accessToken)

    const user = await UserModel.findById(decoded.id)

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized, user not found",
      })
    }

    return res.status(200).json({
      message: "User fetched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email
        }
      }
    })

  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or Expired access token"
    })
  }
}

export const refreshController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized, refresh token not found",
    })
  }

  try {

    const decoded = verifyRefreshToken(refreshToken)

    const user = await UserModel.findById(decoded.id)

    if (refreshToken !== user.refreshToken) {

      user.refreshToken = null
      await user.save()

      return res.status(401).json({
        message: "Unauthorized, refresh token mismatch",
      })
    }

    const {
      accessToken,
      refreshToken: newRefreshToken
    } = generateTokens({ userId: user._id })

    user.refreshToken = newRefreshToken
    await user.save()

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true })

    res.status(200).json({
      message: "Tokens refreshed successfully",
      accessToken
    })
  }
  catch (err) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired refresh token",
    })
  }
}