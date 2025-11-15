const express = require("express");
const { protect, admin } = require("../middlewares/roleMiddleware");
const getAllUser = require("../controllers/userController");

const router = express.Router();

// @GetAllUsers GET /api/user
// @desc get All user from data base
// @Access Private/Admin
router.get("/", protect, admin, getAllUser);

module.exports = router;
