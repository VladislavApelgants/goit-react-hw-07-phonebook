import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://61b8d87738f69a0017ce5dbc.mockapi.io/';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const resp = await axios.get('./contacts/contacts');
    dispatch(fetchContactsSuccess(resp.data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const contactsItem = text => async dispatch => {
  const item = {
    createdAT: new Date(),
    name: text.name,
    phone: text.phone,
    complited: false,
  };

  dispatch(addContactsRequest());

  try {
    const resp = await axios.post('/contacts/contacts', item);
    dispatch(addContactsSuccess(resp.data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(deleteContactsRequest());
  try {
    await axios.delete(`/contacts/contacts/${id}`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};
