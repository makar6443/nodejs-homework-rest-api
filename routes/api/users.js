const express = require("express");
const {
  register,
  loginUser,
  logoutUser,
  getCurrentUser,
} = require("../../controllers/auth/index");
const {
  checkRegisterUserData,
  checkLoginUserData,
  protect,
} = require("../../middlewares/auth/index");

const catchAsync = require("../../utils/catchAsync");

const router = express.Router();

router.post("/register", checkRegisterUserData, catchAsync(register));

router.post("/login", checkLoginUserData, catchAsync(loginUser));

router.post("/logout", protect, catchAsync(logoutUser));

router.get("/current", protect, catchAsync(getCurrentUser));

module.exports = router;