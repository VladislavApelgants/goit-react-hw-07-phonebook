import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filterAction,
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

const contactsFilter = createReducer('', {
  [filterAction]: (state, { payload }) => payload,
});

const contactsItem = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,

  [addContactsSuccess]: (state, { payload }) => {
    return [payload, ...state];
  },

  [deleteContactsSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,

  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});
export default combineReducers({
  filter: contactsFilter,
  item: contactsItem,
  loading,
});
