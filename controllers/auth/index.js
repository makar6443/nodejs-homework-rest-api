const { signToken } = require("./signToken");
const { registerUser } = require("./registerUser");
const { loginUser } = require("./loginUser");
const { logoutUser } = require("./logoutUser");
const { getCurrentUser } = require("./getCurrentUser");

module.exports = {
  signToken,
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser
}