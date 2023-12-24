import {Contact} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchContacts} from './contactThunks';
import {RootState} from '../../app/store';

interface ContactsState {
  items: Contact[];
  fetchLoading: boolean;
}

const initialState: ContactsState = {
  items: [],
  fetchLoading: false,
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
  }
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectFetchContactLoading = (state: RootState) => state.contacts.fetchLoading;