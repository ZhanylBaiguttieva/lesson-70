import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiContact, ContactsList} from '../../types';
import axiosApi from '../../axiosApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const contactsResponse = await axiosApi.get<ContactsList | null>('/contacts.json');
    const contacts = contactsResponse.data;

    if (!contacts) {
      return [];
    }

    return Object.keys(contacts).map(key => {
      const contact = contacts[key];
      return {
        ...contact,
        id: key,
      };
    });
  });
export const createContact = createAsyncThunk<void, ApiContact>(
  'contacts/create',
  async(contact) => {
    await axiosApi.post('/contacts.json', contact);
  }
);