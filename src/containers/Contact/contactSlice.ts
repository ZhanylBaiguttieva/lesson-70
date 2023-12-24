import {Contact} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {createContact, fetchContacts} from './contactThunks';
import {RootState} from '../../app/store';

interface ContactsState {
  items: Contact[];
  fetchLoading: boolean;
  createLoading: boolean;
}

const initialState: ContactsState = {
  items: [],
  fetchLoading: false,
  createLoading: false,
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
      state.createLoading = true;
    });

    builder.addCase(createContact.rejected, (state) => {
      state.createLoading = true;
    });
  }
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectFetchContactLoading = (state: RootState) => state.contacts.fetchLoading;
export const selectCreateContactLoading = (state: RootState) => state.contacts.createLoading;