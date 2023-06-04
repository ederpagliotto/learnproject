import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <NavLink to="/">LTP</NavLink>
        </div>

        <ul className="sections">
          <li>
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="border"></div>
    </div>
  );
};

export default Header;
