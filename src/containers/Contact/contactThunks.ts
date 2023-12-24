import {createAsyncThunk} from '@reduxjs/toolkit';
import {ContactsList} from '../../types';
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