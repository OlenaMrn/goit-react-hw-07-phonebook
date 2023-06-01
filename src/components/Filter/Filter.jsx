import React from 'react';
// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter, getFilter } from '../../redux/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  // const dispatch = useDispatch();

  // const onSetFilter = payload => {
  //   dispatch(setFilter(payload));
  // };

  // const updateFilter = event => {
  //   onSetFilter(event.target.value);
  // };

  // const filter = useSelector(getFilter);

  return (
    <div className={css.wrap}>
      <label className={css.label} htmlFor="Find">
        Find contact by name{' '}
      </label>
      <input
        className={css.input}
        type="text"
        // onChange={updateFilter}
        name="filter"
        // value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
