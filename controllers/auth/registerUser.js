const { User } = require("../../models/users");
const { emailConfirm } = require("../../services/emailService");

const registerUser = async (req, res) => {
  const newUser = await User.create(req.body);

  newUser.password = undefined;

  emailConfirm(newUser.email, newUser.verificationToken);

  return res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = {
	registerUser
}