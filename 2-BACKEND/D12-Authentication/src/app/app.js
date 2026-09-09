import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import jwt from 'jsonwebtoken'
import UserModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { authenticate } from '../middlewares/auth.middleware.js'


const app = express()
app.use(express.json())


app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Welcome to the Authentication API"
  })
})


// Register
app.post('/api/auth/register', async (req, res) => {
  const { email, name, password } = req.body

  if (!email || !name || !password) {
    return res.status(400).json({
      message: "All fields are required"
    })
  }


  const user = await UserModel.create({
    email,
    name,
    password: await bcrypt.hash(password, 10)
  })


  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)


  return res.status(200).json({
    message: "User created successfully",
    data: {
      user: {
        name,
        email,
        id: user._id
      },
      token
    }
  })
})


// Login
app.post('/api/auth/login', async (req, res) => {

  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    res.status(400).json({
      message: "Invalid Email or Password"
    })
  }

  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)

  res.status(200).json({
    message: "User logged in successfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    }
  })
})


// Me
app.post('/api/auth/me', authenticate, async (req, res) => {
  console.log(req.user);

  res.status(200).json({
    data: {
      user: req.user
    }
  })

})


export default app