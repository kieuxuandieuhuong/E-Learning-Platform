import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  return (
    <>
      
      <div className="login-container">
        <div className="form-box">
          <h2 className='title'>Login</h2>
          <form action="">
            <div>
              <input type="email" name="email" placeholder='Email' className='form-control' />
            </div>
            <div>
              <input type="password" name='password' placeholder='Password' className='form-control' />
            </div>
              <Link to="/forgot-password" className='forgot'>Forgot Password?</Link>
            <div className="justify-button">
              <Link to ='/' className='button'>Login</Link>
            </div>
            <div className='Register'>
            <p>Don't have an account?
              <Link to ='/Signup' className='register-link'> Register</Link>
            </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
