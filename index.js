const {
  getlistContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// console.log(getlistContacts());
// console.log(getContactById);
// console.log(removeContact);
// console.log(addContact);

async function foo() {
  const x = await removeContact("qyuhtf50ldesmd1t");
  console.log(x);
}

foo();
