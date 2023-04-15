const { User } = require("../../models/users");

const verifyUser = async (req, res) => {
  const token = req.params.verificationToken;
  const user = await User.findOne({ verificationToken: token });
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  user.setVerify(true);
  await user.save();

  res.status(200).json({ message: "Verification successful" });
};

module.exports = {
	verifyUser
}