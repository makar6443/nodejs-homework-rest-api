const { User } = require("../../models/users");

const registerUser = async (req, res) => {
  const newUser = await User.create(req.body);

  newUser.password = undefined;

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