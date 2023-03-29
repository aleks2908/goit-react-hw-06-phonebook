import React from 'react';
import { Contact } from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getFilter,
  getContacts,
} from '../../redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onDelete = contactId => dispatch(deleteContact(contactId));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul>
      {filteredContactList.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
