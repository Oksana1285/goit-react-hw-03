import { useState, useEffect } from 'react';
import css from './App.module.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import contactsData from './contacts.json';

const ContactsKey = 'initial-contacts';

const initialContact = () => {
  const localStorageContacts = localStorage.getItem(ContactsKey);
  return localStorageContacts ? JSON.parse(localStorageContacts) : contactsData;
};

const App = () => {
  const [contacts, setContacts] = useState(initialContact);

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem(ContactsKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in your contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contacts => contacts.id !== id);
    });
  };

  const filterContact = search
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      )
    : contacts;

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContact} onDelete={deleteContact} />
    </div>
  );
};

export default App;
