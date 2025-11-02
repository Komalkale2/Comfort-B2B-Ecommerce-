const mongoose = require('mongoose');
require('dotenv').config(); // load .env variables here too

module.exports = async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;
    console.log("Connecting to MongoDB using URI:", uri); // debug log

    if (!uri) {
      throw new Error("MONGO_URI is undefined. Please check your .env file path or name.");
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
