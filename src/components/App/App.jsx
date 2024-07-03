import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactsList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import initialContacts from "../contacts.json";
// console.log(contacts);

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList initialContacts={contacts} />
    </div>
  );
}
