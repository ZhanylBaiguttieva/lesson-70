import React from 'react';
import Contacts from '../Contact/Contacts';

const Home: React.FC = () => {

  return (
    <div className="row mt-2">
      <div className="col-7">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;