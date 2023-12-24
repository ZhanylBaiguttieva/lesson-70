import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
  selectContacts,
  selectDeleteContactLoading,
  selectFetchContactLoading
} from './contactSlice';
import React, {useEffect} from 'react';
import {deleteContact, fetchContacts} from './contactThunks';
import Spinner from '../../Spinners/Spinner';
import ContactItem from './ContactItem';
import {Contact} from '../../types';

const Contacts: React.FC= () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const contactsLoading = useAppSelector(selectFetchContactLoading);
  const deleteLoading = useAppSelector(selectDeleteContactLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const removeContact = async(id: string) => {
    await dispatch(deleteContact(id));
    await dispatch(fetchContacts());
  };

  return (
    <>
      {contactsLoading ? <Spinner/> : contacts.map((contact: Contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteLoading={deleteLoading}
          onDelete={() => removeContact(contact.id)}
        />
      ))}
    </>
  );
};

export default Contacts;