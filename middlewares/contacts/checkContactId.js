const { Types } = require("mongoose");
const catchAsync = require("../../utils/catchAsync");

const checkContactId = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;

  const idIsValid = Types.ObjectId.isValid(contactId);
  if (!idIsValid) return res.status(404).json({ message: "Not Found" });

  next();
});

module.exports = {
	checkContactId
}