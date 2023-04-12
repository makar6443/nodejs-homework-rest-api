const Contacts = require("../../models/contacts");

const getContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contacts.findById(contactId);

  return res.status(200).json(data);
};
  
module.exports = {
  getContact
}