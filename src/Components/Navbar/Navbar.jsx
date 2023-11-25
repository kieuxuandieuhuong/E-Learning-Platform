import {Link, NavLink} from 'react-router-dom'
import logo from '../../Images/logo.png'
import {links } from '../../datahome'
import {FaBars } from "react-icons/fa6";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to ="/" className='logo'>
          <img src={logo} alt="Nav Logo" />
        </Link>
        <ul className='nav_links'>
          {
            links.map(({name, path}, index) => {
              return(
                <li>
                  <NavLink to ={path} className={({isActive}) => isActive ?  'active-nav' : ''}>{name}</NavLink>
                </li>
              )
            }
            )
          }
        </ul>
        <button className="nav_togglr-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  )
}
export default Navbar