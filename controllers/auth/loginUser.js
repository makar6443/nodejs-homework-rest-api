const { User } = require("../../models/users");
const { signToken } = require("./signToken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user)
    return res.status(401).json({ message: "Invalid email or password" });

  const passwordIsValid = await user.checkPassword(password, user.password);
  if (!passwordIsValid)
    return res.status(401).json({ message: "Invalid email or password" });

  const token = signToken(user.id);
  user.setToken(token);
  const loginUser = await user.save();

  return res.status(200).json({
    token: loginUser.token,
    user: {
      email: loginUser.email,
      subscription: loginUser.subscription,
    },
  });
};

module.exports = {
  loginUser
}