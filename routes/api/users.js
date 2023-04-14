const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateAvatars
} = require("../../controllers/auth/index");
const {
  checkRegisterUserData,
  checkLoginUserData,
  protect,
  uploadUserPhoto
} = require("../../middlewares/auth/index");

const catchAsync = require("../../utils/catchAsync");

const router = express.Router();

router.post("/register", checkRegisterUserData, catchAsync(registerUser));

router.post("/login", checkLoginUserData, catchAsync(loginUser));

router.post("/logout", protect, catchAsync(logoutUser));

router.get("/current", protect, catchAsync(getCurrentUser));

router.patch("/avatars", protect, uploadUserPhoto, catchAsync(updateAvatars));

module.exports = router;