const catchAsync = require("../../utils/catchAsync");

const { updateFavoriteContactValidator } = require("../../utils/contactValidator");

const checkUpdateFavoriteContact = catchAsync(async (req, res, next) => {
  const { error, value } = updateFavoriteContactValidator(req.body);
  if (error) return res.status(400).json({ message: "missing field favorite" });

  req.body = value;
  next();
});

module.exports = {
	checkUpdateFavoriteContact
}