const Contacts = require("../../models/contacts");
const catchAsync = require("../../utils/catchAsync");

const { updateContactDataValidator } = require("../../utils/contactValidator");

const checkUpdateContactData = catchAsync(async (req, res, next) => {
  const { error, value } = updateContactDataValidator(req.body);
  if (error) return res.status(400).json({ message: "missing fields" });
  const contactExists = await Contacts.exists({ email: value.email });
  if (contactExists)
    return res
      .status(409)
      .json({ message: "Contact with this email already exists..." });

  req.body = value;
  next();
});

module.exports = {
  checkUpdateContactData
}