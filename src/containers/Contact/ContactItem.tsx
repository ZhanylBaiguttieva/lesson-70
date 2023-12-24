import React from 'react';
import {Contact} from '../../types';

interface Props {
  contact: Contact;
}

const ContactItem: React.FC<Props> = ({contact}) => {
  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';

  const image = contact.photo || imageUrl;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`,
  };

  return (
    <div className="card mb-2">
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
};

export default ContactItem;