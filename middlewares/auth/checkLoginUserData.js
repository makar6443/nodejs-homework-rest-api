const { User } = require("../../models/users");
const catchAsync = require("../../utils/catchAsync");

const { userDataValidator } = require("../../utils/userValidator");

const checkLoginUserData = catchAsync(async (req, res, next) => {
  const { error, value } = userDataValidator(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const userExists = await User.exists({ email: value.email });
  if (!userExists)
    return res.status(400).json({ message: error.details[0].message });
  req.body = value;
  next();
});

module.exports = {
	checkLoginUserData
}