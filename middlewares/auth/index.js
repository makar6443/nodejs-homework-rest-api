const { checkRegisterUserData } = require("./checkRegisterUserData");
const { checkLoginUserData } = require("./checkLoginUserData");
const { protect } = require("./protect");

module.exports = {
  checkRegisterUserData,
  checkLoginUserData,
  protect
}