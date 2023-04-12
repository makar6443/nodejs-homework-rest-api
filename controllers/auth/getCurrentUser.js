const getCurrentUser = async (req, res, next) => {
  const currentUser = req.user;
  return res
    .status(200)
    .json({ email: currentUser.email, subscription: currentUser.subscription });
};

module.exports = {
    getCurrentUser
}