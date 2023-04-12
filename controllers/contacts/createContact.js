const Contacts = require("../../models/contacts");

const createContact = async (req, res, next) => {
  const value = req.value;
  const { email, subscription } = req.user;
  const data = await Contacts.create({
    owner: { email, subscription },
    ...value,
  });
  return res.status(201).json(data);
};

module.exports = {
  createContact
}