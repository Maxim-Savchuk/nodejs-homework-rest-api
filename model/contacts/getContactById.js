const listContacts = require("./listContacts.js");

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => String(item.id) === contactId);
  if (!result) {
    return null;
  }
  return result;
}

module.exports = getContactById;
