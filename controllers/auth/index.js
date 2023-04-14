const { signToken } = require("./signToken");
const { registerUser } = require("./registerUser");
const { loginUser } = require("./loginUser");
const { logoutUser } = require("./logoutUser");
const { getCurrentUser } = require("./getCurrentUser");
const { updateAvatars } = require("./updateAvatars")

module.exports = {
  signToken,
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateAvatars
}