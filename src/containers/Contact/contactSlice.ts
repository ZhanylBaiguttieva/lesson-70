import {ApiContact, Contact} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createContact, deleteContact, fetchContacts, fetchOneContact, updateContact} from './contactThunks';
import {RootState} from '../../app/store';

interface ContactsState {
  items: Contact[];
  contact: ApiContact | null;
  fetchLoading: boolean;
  createLoading: boolean;
  deleteLoading: boolean | string;
  fetchOneLoading: boolean;
  updateLoading: boolean;
}

const initialState: ContactsState = {
  items: [],
  contact: null,
  fetchLoading: false,
  createLoading: false,
  deleteLoading: false,
  fetchOneLoading: false,
  updateLoading: false,
};

export const contactsSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.fetchLoading = true;
    });

    builder.addCase(fetchContacts.fulfilled, (state, {payload: items}) => {
      state.fetchLoading = false;
      state.items = items;
    });

    builder.addCase(fetchContacts.rejected, (state) => {
      state.fetchLoading = false;
    });

    builder.addCase(createContact.pending, (state) => {
      state.createLoading = true;
    });

    builder.addCase(createContact.fulfilled, (state) => {
      state.createLoading = false;
    });

    builder.addCase(createContact.rejected, (state) => {
      state.createLoading = false;
    });

    builder.addCase(deleteContact.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });

    builder.addCase(deleteContact.fulfilled, (state) => {
      state.deleteLoading = false;
    });

    builder.addCase(deleteContact.rejected, (state) => {
      state.deleteLoading = false;
    });

    builder.addCase(fetchOneContact.pending, (state) => {
      state.fetchOneLoading = true;
    });

    builder.addCase(fetchOneContact.fulfilled, (state, {payload: contact}: PayloadAction<ApiContact | null>) => {
      state.fetchOneLoading = false;
      state.contact = contact;
    });

    builder.addCase(fetchOneContact.rejected, (state) => {
      state.fetchOneLoading = false;
    });

    builder.addCase(updateContact.pending, (state) => {
      state.updateLoading = true;
    });

    builder.addCase(updateContact.fulfilled, (state) => {
      state.updateLoading = false;
    });

    builder.addCase(updateContact.rejected, (state) => {
      state.updateLoading = false;
    });
  }
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectContact = (state: RootState) => state.contacts.contact;
export const selectFetchContactLoading = (state: RootState) => state.contacts.fetchLoading;
export const selectCreateContactLoading = (state: RootState) => state.contacts.createLoading;
export const selectDeleteContactLoading = (state: RootState) => state.contacts.deleteLoading;
export const selectFetchOneContactLoading = (state: RootState) => state.contacts.fetchOneLoading;
export const selectUpdateContactLoading = (state: RootState) => state.contacts.updateLoading;