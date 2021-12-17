import React, { useEffect } from 'react';
import s from './App.module.scss';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from '../redux/contacts/contacts-actions';
import {
  contactsItem,
  fetchContacts,
} from '../redux/contacts/contacts-operations';

function App() {
  const filter = useSelector(state => state.contacts.filter);
  const items = useSelector(state => state.contacts.item);
  const load = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  function formSubmit(name, phone) {
    if (items.find(contact => contact.name === name)) {
      alert(`${name} is already in the contacts`);
      return;
    }

    return dispatch(contactsItem({ name, phone }));
  }

  function getFiltered() {
    const lowerCase = filter && filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(lowerCase),
    );
  }

  function filt(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'filter':
        dispatch(filterAction(value));
        break;
      default:
        return;
    }
  }

  return (
    <div className={s.phonebook}>
      <h1 className={s.title}>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <div className="contacts">
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={filt} />
        <div className={s.containerOverflow}>
          {load && <p>Load...</p>}
          {items.length !== 0 ? (
            <ContactList data={getFiltered()} />
          ) : (
            <p>There is nothing here yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
