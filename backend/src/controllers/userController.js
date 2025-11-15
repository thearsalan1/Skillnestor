// controllers/userController.js
const User = require("../models/User");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = getAllUser;
