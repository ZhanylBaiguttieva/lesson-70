import './App.css';
import NavBar from './NavBar/NavBar';
import {Route, Routes} from 'react-router-dom';
import Contacts from './containers/Contact/Contacts';
import NewContact from './containers/NewContact/NewContact';
import EditContact from './containers/EditContact/EditContact';

function App() {

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(<Contacts/>)} />
          <Route path="/new-contact" element={(<NewContact/>)} />
          <Route path="/edit-contact/:id" element={(<EditContact/>)} />
          <Route path="*" element={(<h1>Not Found!</h1>)}/>
        </Routes>

      </main>
    </div>
  );
}

export default App;
