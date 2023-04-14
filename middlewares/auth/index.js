const { checkRegisterUserData } = require("./checkRegisterUserData");
const { checkLoginUserData } = require("./checkLoginUserData");
const { protect, uploadUserPhoto } = require("./protect");

module.exports = {
  checkRegisterUserData,
  checkLoginUserData,
  protect,
  uploadUserPhoto
}