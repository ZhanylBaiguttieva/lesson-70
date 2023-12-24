import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCreateContactLoading} from '../Contact/contactSlice';
import {ApiContact} from '../../types';
import {createContact} from '../Contact/contactThunks';
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

const NewDish: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createLoading = useAppSelector(selectCreateContactLoading);

  const onSubmit = (contact:ApiContact) => {
    dispatch(createContact(contact));
    navigate('/');
  };



  return (
    <div className="row mt-2">
      <div className="col">
        <ContactForm onSubmit={onSubmit} isLoading={createLoading}/>
      </div>
    </div>
  );
};

export default NewDish;