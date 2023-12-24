import React, {useState} from 'react';
import {Contact} from '../../types';
import Modal from '../Modal/Modal';
import ButtonSpinner from '../../Spinners/ButtonSpinner';
import {Link} from 'react-router-dom';

interface Props {
  contact: Contact;
  deleteLoading: boolean | string;
  onDelete: React.MouseEventHandler;
}

const ContactItem: React.FC<Props> = ({contact, deleteLoading, onDelete}) => {
  const [showModal, setShowModal] = useState(false);
  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';
  const image = contact.photo || imageUrl;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`,
  };

  const contactDetail = (
    <div className="card mb-2" onClick={() => setShowModal(true)}>
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start" style={imageStyle}/>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p className="card-text small">{contact.phone}</p>
            <p className="card-text">{contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {contactDetail}
      <Modal show={showModal} title="X" onClose={() => setShowModal(false)}>
        <div className="modal-body">
          {contactDetail}
        </div>
        <div className="modal-footer">
          <Link to={'/edit-contact/' + contact.id} className='btn btn-primary'>Edit</Link>
          <button className="btn btn-danger" onClick={onDelete}
                  disabled={deleteLoading ? deleteLoading === contact.id : false}
          >
            {deleteLoading && deleteLoading === contact.id && (<ButtonSpinner/>)}Delete</button>
        </div>
      </Modal>
    </>

  );
};

export default ContactItem;