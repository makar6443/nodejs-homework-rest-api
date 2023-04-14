const logoutUser = async (req, res) => {
  const user = req.user;

  user.setToken(null);

  const logoutUser = await user.save();
  if (!logoutUser) {
    return res.status(500).json({ message: "Something went wrong..." });
  }

  res.status(204).send();
};

module.exports = {
	logoutUser
}