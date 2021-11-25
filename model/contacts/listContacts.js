const fs = require("fs").promises;
const contactsPath = require("./filePath.js");

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

module.exports = listContacts;
