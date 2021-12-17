import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('app/fetchContactsRequest');
export const fetchContactsSuccess = createAction('app/fetchContactsSuccess');
export const fetchContactsError = createAction('app/fetchContactsError');

export const addContactsRequest = createAction('app/addContactsRequest');
export const addContactsSuccess = createAction('app/addContactsSuccess');
export const addContactsError = createAction('app/addContactsError');

export const deleteContactsRequest = createAction('app/deleteContactsRequest');
export const deleteContactsSuccess = createAction('app/deleteContactsSuccess');
export const deleteContactsError = createAction('app/deleteContactsError');

export const filterAction = createAction('app/filter');

// export const contactsDelete = createAction('app/delete');
