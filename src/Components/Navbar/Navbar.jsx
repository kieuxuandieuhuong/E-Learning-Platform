import React from 'react';
import { Container } from "reactstrap";
import logo from "../../Images/logo.png";
import "./Navbar.css";

const navLinks = [
  {
    display: 'Home',
    url:'#'
  },
  {
    display: 'Course',
    url:'#'
  },
  {
    display: 'About Us',
    url:'#'
  },
  {
    display: 'Contact',
    url:'#'
  },
]
   

const Navbar = () => {
  return (
    <section>
      <Container>
        <div className='navigation'>
          <div className='logo'>
          <img src={logo} alt="Nav logo" />
          </div>

          <div className='nav'>
          <div className='nav-menu'>
            <ul className='nav_list'>{
                navLinks.map((item, index)=>(
                  <li key={index} className='nav_item'>
                <a href= {item.url}>{item.display}  </a>
              </li>
                )) }
            </ul>
          </div>
          <div class="auth-buttons">
                <button class="login-button">Login</button>
                <button class="signup-button">Sign Up</button>
          </div>
          </div>
      </div>
      </Container>
    </section>
  );
};

export default Navbar;
