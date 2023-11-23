import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo">
          <img src={logo} alt="Nav logo" />
        </Link>
      </div>
      <ul className='nav_links'>
        {}
      </ul>
    </nav>
  );
};

export default Navbar;
