const { User } = require("../../models/users");
const catchAsync = require("../../utils/catchAsync");

const { userDataValidator } = require("../../utils/userValidator");

const checkLoginUserData = catchAsync(async (req, res, next) => {
  const { error, value } = userDataValidator(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const userExists = await User.exists({ email: value.email });
  if (!userExists)
    return res.status(400).json({ message: error.details[0].message });
  if (!value.verify) {
    return res
      .status(401)
      .json({ message: "The user has not confirmed themselves via email." });
  }
  req.body = value;
  next();
});

module.exports = {
	checkLoginUserData
}