const Contacts = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  await Contacts.findByIdAndRemove(contactId);

  return res.status(200).json({ message: "contact deleted" });
};
  
module.exports = {
  deleteContact
}