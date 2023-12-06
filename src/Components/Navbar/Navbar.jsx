import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import logo from '../../Images/logo.png'
import {links } from '../../datahome'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './Navbar.css'

const Navbar = () => {


  const [ isNavShowing, setIsNavShowing] = useState(true);
  return (
    <nav>
      <div className="container nav_container">
      <button className="nav_toggle-btn" onClick={() => setIsNavShowing 
          (prev => !prev)}>
         {
          isNavShowing ? <IoMdClose /> : <FaBars/>
         }
        </button>
        
        <Link to ="/" className='logo' onClick={()=> setIsNavShowing(false)}>
          <img src={logo} alt="Nav Logo" />
        </Link>
        <ul className= {`nav_links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>
          {
            links.map(({name, path}, index) => {
              return(
                <li key= {index}>
                  <NavLink to ={path} className={({isActive}) => isActive ?  'active-nav' : ''} onClick={() => setIsNavShowing 
          (prev => !prev)}>{name}</NavLink>
                </li>
              )
            }
            )
          }
        </ul>
        <Link to ='/Login' className="login_button">Login/Sign Up</Link>
        
      </div>
    </nav>
  )
}
export default Navbar