import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectContact, selectFetchOneContactLoading, selectUpdateContactLoading} from '../Contact/contactSlice';
import React, {useEffect} from 'react';
import {fetchOneContact, updateContact} from '../Contact/contactThunks';
import {ApiContact} from '../../types';
import ContactForm from '../ContactForm/ContactForm';
import Spinner from '../../Spinners/Spinner';

const EditContact: React.FC = () => {
  const {id} = useParams() as {id: string};
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const contact = useAppSelector(selectContact);
  const fetchLoading = useAppSelector(selectFetchOneContactLoading);
  const updateLoading = useAppSelector(selectUpdateContactLoading);

  useEffect(() => {
    dispatch(fetchOneContact(id));
  }, [dispatch, id]);

  const onSubmit = async (contact: ApiContact) => {
    await dispatch(updateContact({id,contact}));
    navigate('/');
  };

  const existingContact = contact ? {
    ...contact,
  } : undefined;

  // let formSection = <Spinner/>;



  return (
    <div className="row mt-2">
      <div className="col">
        {fetchLoading && <Spinner/>}
        {existingContact && (
          <ContactForm
            isEdit
            onSubmit={onSubmit}
            existingContact={existingContact}
            isLoading={updateLoading}
          />
        )}
      </div>
    </div>
  );
};

export default EditContact;