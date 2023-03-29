import 'modern-normalize';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';
import { ContactList } from '../ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitData = data => {
    const normalizedName = data.name.toLowerCase();
    const filtredContacts = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (filtredContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [
      ...prevState,
      {
        name: data.name,
        number: data.number,
        id: nanoid(),
      },
    ]);
  };

  const handleFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.wrapper}>
      <h2>PhoneBook</h2>
      <ContactForm onSummit={formSubmitData} />

      <h3>Contacts</h3>
      <Filter value={filter} handleFilter={handleFilter} />

      <ContactList filtredContacts={filtredContacts} onDelete={deleteContact} />
    </div>
  );
};
