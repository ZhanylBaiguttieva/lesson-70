import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink to="/" className="nav-link fs-5 text-white">Contacts</NavLink>
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/new-contact" className="nav-link">New Contact</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default NavBar;