const { checkCreateContactData } = require("./checkCreateContactData");
const { checkUpdateContactData } = require("./checkUpdateContactData");
const { checkUpdateFavoriteContact } = require("./checkUpdateFavoriteContact");
const { checkContactId } = require("./checkContactId");

module.exports = {
  checkCreateContactData,
  checkUpdateContactData,
  checkUpdateFavoriteContact,
  checkContactId
}