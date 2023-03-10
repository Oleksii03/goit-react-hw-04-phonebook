import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledBtn } from './PhoneBook.styled';

const Phonebook = ({ onRemoveContact, onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('not correct option');
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };

    const isSuccess = onAddContact(contact);
    if (isSuccess) {
      setName('');
      setNumber('');
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="name"
            value={name}
            onChange={handleInput}
            required
          />
        </label>
        <label htmlFor="">
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="number"
            value={number}
            onChange={handleInput}
            required
          />
        </label>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </div>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  onAddContact: PropTypes.func,
  onRemoveContact: PropTypes.func,
};