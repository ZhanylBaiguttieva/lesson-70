import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectContacts, selectFetchContactLoading} from './contactSlice';
import React, {useEffect} from 'react';
import {fetchContacts} from './contactThunks';
import Spinner from '../../Spinners/Spinner';
import ContactItem from './ContactItem';
import {Contact} from '../../types';

const Contacts: React.FC= () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const contactsLoading = useAppSelector(selectFetchContactLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contactsLoading ? <Spinner/> : contacts.map((contact: Contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </>
  );
};

export default Contacts;