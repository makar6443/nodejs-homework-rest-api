const ImageService = require("../../services/imageService");

const updateAvatars = async (req, res) => {
  const { file, user } = req;
  console.log(user);
  if (file) {
    user.avatarURL = await ImageService.save(file, 250, 250, "avatars");
  }

  Object.keys(req.body).forEach((key) => (user[key] = req.body[key]));

  const updatedUser = await user.save();

  res.status(200).json({ avatarURL: updatedUser.avatarURL });
};

module.exports = {
  updateAvatars
}