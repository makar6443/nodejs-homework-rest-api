const { User } = require("../../models/users");
const { emailConfirm } = require("../../services/emailService");

const verificationToken = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  emailConfirm(email, user.verificationToken);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = {
	verificationToken
}