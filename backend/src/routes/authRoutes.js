const express = require("express");
const {
  registerUser,
  loginUser,
  ForgotPassword,
  resetPassword,
} = require("../controllers/authcontroller");

const router = express.Router();

// @Register POST /api/auth/register
// @Desc Used to register a new user
// @Access Public
router.post("/register", registerUser);

// @Login POST /api/auth/login
// @Desc Use to login registerd user
// @Access Public
router.post("/login", loginUser);

// @forgotPassword POST /api/auth/forgot-password
// @Desc post request for sending otp
// @Access Piblic
router.post("/forgot-password", ForgotPassword);

// @ResetPassword POST /api/auth/reset-password
// @Desc post request for rest password
// @Access Public
router.post("/reset-password", resetPassword);

module.exports = router;
