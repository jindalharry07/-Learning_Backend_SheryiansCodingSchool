const mongoose = require("mongoose");

// async function connectDB() {
//   await mongoose.connect("mongodb+srv://Harry:harry@learning-backend.ws8q31v.mongodb.net/LEARN");

//   console.log("Connected DB!");
// }
async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected DB!");
}

module.exports = connectDB