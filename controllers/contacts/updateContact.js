const Contacts = require("../../models/contacts");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await Contacts.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  return res.status(200).json(data);
};

module.exports = {
  updateContact
}