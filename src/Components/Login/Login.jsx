
import React from 'react';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  return (
<>
<div className="login-container">
        <div className="form-box">
          <h3 className='title'>Login</h3>
          <form action="">
            <div>
              <input type="email" name="email" placeholder='Email' className='form-control' />
            </div>
            <div>
              <input type="password" name='password' placeholder='Password' className='form-control' />
            </div>
            <div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="justify-button">
              <button className='button '>Login</button>
              <Link className="button" to="/Signup">Sign Up</Link>
            </div>
          </form>
        </div>
</div>
<Footer />
</>
)}

export default Login;
