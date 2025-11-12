import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">OXOT</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/industries">Industries</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
