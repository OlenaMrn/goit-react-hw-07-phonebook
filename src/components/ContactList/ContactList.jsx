import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contactsOperations';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Завантаження данних
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
// ОТРИМАННЯ МАСИВУ ДАННИХ
// const isLoading = useSelector(getIsLoading);
// const filteredContacts = useSelector(getFilteredContacts);
  
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <p className={css.contact_name}>{contact.name}</p>
          <p className={css.contact_number}>{contact.phone}</p>
          <button
            onClick={() => dispatch(deleteContact(contact.id))}
            className={css.button}
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};


