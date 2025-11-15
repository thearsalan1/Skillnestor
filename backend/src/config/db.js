const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 50000,
      socketTimeoutMS: 45000,
    });
    console.log("Connect to database successfully");
  } catch (error) {
    console.error("Error in connecting to database:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
