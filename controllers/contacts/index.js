const { contactsList } = require("./contactList");
const { getContact } = require("./getContact");
const { deleteContact } = require("./deleteContact");
const { createContact } = require("./createContact");
const { updateContact } = require("./updateContact");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  contactsList,
  getContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
};