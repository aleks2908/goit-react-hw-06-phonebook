import 'modern-normalize';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';
import { ContactList } from '../ContactList/ContactList';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <h2>PhoneBook</h2>
      <ContactForm />

      <h3>Contacts</h3>
      <Filter />

      <ContactList />
    </div>
  );
};
