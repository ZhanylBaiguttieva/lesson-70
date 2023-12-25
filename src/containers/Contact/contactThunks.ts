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

export const deleteContact = createAsyncThunk<void, string>(
  'contacts/delete',
  async (contactId) => {
    await axiosApi.delete('/contacts/' + contactId + '.json');
  }
);

export const fetchOneContact = createAsyncThunk<ApiContact, string>(
  'contacts/fetchOne',
  async(contactId) => {
    const response = await axiosApi.get<ApiContact| null>('/contacts/' + contactId + '.json');
    const contact = response.data;

    if(contact === null) {
      throw new Error('Not found');
    }

    return contact;
  }
);

interface UpdateContactParams {
  id: string,
  contact: ApiContact,
}
export const updateContact = createAsyncThunk<void,UpdateContactParams>(
  'contacts/update',
  async({id, contact}) => {
    await axiosApi.put('/contacts/' + id + '.json', contact);
  }
);