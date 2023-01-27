const uniqid = require("uniqid");
const fs = require("fs").promises;
const path = require("path");

const listContactsPath = path.resolve("db/contacts.json");

async function updateDataContacts(newDataContacts) {
  await fs.writeFile(listContactsPath, JSON.stringify(newDataContacts));
}

async function getlistContacts() {
  const data = await fs.readFile(listContactsPath, "utf8");
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const allContacts = await getlistContacts();
  const contactById = allContacts.find((contact) => contact.id === contactId);

  if (!contactById) {
    return null;
  }

  return contactById;
}

async function removeContact(contactId) {
  const allContacts = await getlistContacts();
  const idx = allContacts.findIndex((item) => item.id === contactId);

  if (idx === -1) {
    return null;
  }

  const [newListContacts] = allContacts.splice(idx, 1);
  await updateDataContacts(allContacts);

  return newListContacts;
}

async function addContact(name, email, phone) {
  const allContacts = await getlistContacts();

  const contactAdd = { id: uniqid(), name, email, phone };
  allContacts.push(contactAdd);

  await updateDataContacts(allContacts);

  return contactAdd;
}

module.exports = {
  getlistContacts,
  getContactById,
  removeContact,
  addContact,
};
