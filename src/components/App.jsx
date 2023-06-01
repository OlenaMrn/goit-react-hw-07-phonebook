
import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.sectionTitle}>Phonebook</h1>
  <ContactForm />
      <h2 className={css.sectionTitle}>Contacts</h2>
     <Filter />
      <ContactsList />
    </div>
  );
};
