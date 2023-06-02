import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contactsOperations';
import {
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/contactsSelectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};
