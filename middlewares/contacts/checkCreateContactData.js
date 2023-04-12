const Contacts = require("../../models/contacts");
const catchAsync = require("../../utils/catchAsync");

const { createContactDataValidator } = require("../../utils/contactValidator");

const checkCreateContactData = catchAsync(async (req, res, next) => {
  const { error, value } = createContactDataValidator(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const contactExists = await Contacts.exists({ email: value.email });
  if (contactExists)
    return res
      .status(409)
      .json({ message: "Contact with this email already exists..." });
  req.value = value;
  next();
});

module.exports = {
  checkCreateContactData
}