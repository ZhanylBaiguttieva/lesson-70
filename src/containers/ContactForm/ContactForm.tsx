import React, {useState} from 'react';
import {ApiContact} from '../../types';
import ButtonSpinner from '../../Spinners/ButtonSpinner';

const initialState: ApiContact = {
  name: '',
  phone: '',
  email: '',
  photo: '',
};
interface Props {
  onSubmit: (contact: ApiContact) => void;
  existingContact?: ApiContact;
  isEdit?: boolean;
  isLoading?: boolean;
}

// const img = '';
const ContactForm: React.FC<Props> = ({onSubmit, existingContact = initialState, isEdit = false, isLoading= false}) => {
  const [contact, setContact] = useState<ApiContact>(existingContact);

  const changeContact = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(isLoading) return;

    onSubmit({
      ...contact,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? 'Edit contact' : 'Add new contact'}</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={contact.name}
          onChange={changeContact}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <textarea
          name="phone"
          id="phone"
          className="form-control"
          value={contact.phone}
          onChange={changeContact}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <textarea
          name="email"
          id="email"
          className="form-control"
          value={contact.email}
          onChange={changeContact}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Photo</label>
        <input
          type="url"
          name="photo"
          id="photo"
          className="form-control"
          value={contact.photo}
          onChange={changeContact}
        />
      </div>
      {/*{img ? (<img src={img} alt='image'/>) :*/}
      {/*  (<img src={img} alt='image'/>) }*/}
      <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
        {isLoading && <ButtonSpinner/>}
        {isEdit ? 'Edit' : 'Update'}
      </button>
    </form>
  );
};

export default ContactForm;