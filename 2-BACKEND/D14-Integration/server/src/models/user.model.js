import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [3, "Name must be at least 3 characters long"],
    max: [50, "Name must be at most 50 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  passwordHast: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String
  }
})

const UserModel = mongoose.model("Users", userSchema);

export default UserModel