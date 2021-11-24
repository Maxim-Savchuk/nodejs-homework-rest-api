const fs = require("fs").promises;
const contactsPath = require("./filePath.js");

async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

module.exports = updateContacts;
