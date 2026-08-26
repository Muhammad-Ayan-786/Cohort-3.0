const { default: mongoose } = require("mongoose")

const connentDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error in DB connection", error);
  }
}

module.exports = connentDB