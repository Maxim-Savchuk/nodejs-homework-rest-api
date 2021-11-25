const listContact = require("./listContacts");
const updateContacts = require("./updateContacts");

const updateContact = async (id, data) => {
  const contacts = await listContact();
  const idx = contacts.findIndex((item) => String(item.id) === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, ...data };
  await updateContacts(contacts);
  return contacts[idx];
};

module.exports = updateContact;
