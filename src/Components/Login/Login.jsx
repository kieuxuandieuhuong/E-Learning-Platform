import React from 'react';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  return (
<>
<div className="container login-wrapper">
    <div className="row">
      <div className="col">
        <div className="login-card">
          <h3 className='login-title'>Login</h3>
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
              <Link className="button-signup" to="/Signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
<Footer />
</>
)}

export default Login;
