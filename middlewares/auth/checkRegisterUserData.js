const catchAsync = require("../../utils/catchAsync");
const { User } = require("../../models/users");
const { userDataValidator } = require("../../utils/userValidator");

const checkRegisterUserData = catchAsync(async (req, res, next) => {
  const { error, value } = userDataValidator(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const userExists = await User.exists({ email: value.email });
  if (userExists) return res.status(409).json({ message: "Email in use" });
  req.body = value;
  next();
});

module.exports = {
	checkRegisterUserData
}