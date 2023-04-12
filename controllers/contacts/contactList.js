const Contacts = require("../../models/contacts");

const contactsList = async (req, res) => {
  const data = await Contacts.find();

  res.status(200).json(data);
};
  
module.exports = {
  contactsList
}