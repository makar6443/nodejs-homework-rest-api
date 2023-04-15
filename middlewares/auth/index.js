const { checkRegisterUserData } = require("./checkRegisterUserData");
const { checkLoginUserData } = require("./checkLoginUserData");
const { protect, uploadUserPhoto } = require("./protect");
const { checkVerify } = require("./checkVerify")

module.exports = {
  checkRegisterUserData,
  checkLoginUserData,
  protect,
  uploadUserPhoto,
  checkVerify
}