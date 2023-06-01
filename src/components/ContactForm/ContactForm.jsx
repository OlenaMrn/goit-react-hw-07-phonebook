// import React, { useState } from 'react';
// import css from './ContactForm.module.css';

// // import { useDispatch } from 'react-redux';
// // import { addContact } from '../../redux/contactsSlice';
// export const ContactForm = () => {
// //   const dispatch = useDispatch();

// //   const [name, setName] = useState('');
// //   const [number, setNumber] = useState('');

// //   const handleSubmit = e => {
// //     e.preventDefault();

// //     dispatch(addContact({ name, number }));
// //     setName('');
// //     setNumber('');
// //   };

//   return (
//     <div className={css.wrap}>
//       <form className={css.form} onSubmit={handleSubmit}>
//         <label className={css.label} htmlFor="name">
//           Name
//         </label>
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={e => setName(e.target.value)}
//         />
//         <label className={css.label} htmlFor="number">
//           Number
//         </label>
//         <input
//           className={css.input}
//           type="tel"
//           value={number}
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={e => setNumber(e.target.value)}
//         />
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     </div>
//   );
// };

