const { User } = require("../../models/users");
const catchAsync = require("../../utils/catchAsync");

const { verifyUserEmailValidator } = require("../../utils/userValidator");

const checkVerify = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const { error } = verifyUserEmailValidator({ email });
  const user = await User.findOne({ email });

  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });

  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.verify)
    return res
      .status(400)
      .json({ message: "Verification has already been passed" });

  next();
});

module.exports = {
	checkVerify
}