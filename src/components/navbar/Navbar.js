import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='NavbarItems'>
          <h1 className='navbar-logo'>Henry Jung</h1>
          <ul className='nav-menu'>
              <li>
                  <Link to='/' className='nav-links'>Home</Link>
              </li>
              <li>
                  <Link to='/Contact' className='nav-links'>Contact</Link>
              </li>
              <li>
                  <Link to='/Portfolio' className='nav-links'>Portfolio</Link>
              </li>
          </ul>
      </nav>
    </>
  );
}

export default Navbar;
