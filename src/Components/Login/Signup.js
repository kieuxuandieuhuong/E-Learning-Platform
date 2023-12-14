import React from 'react';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
<>
<div className="container login-wrapper">
    <div className="row">
      <div className="col">
        <div className="Signup-card">
          <h3 className='Signup-title'>Sign Up</h3>
          <form action="">
            <div>
              <input type="text" name="name" placeholder='First Name' className='form-control' />
            </div>
            <div>
              <input type="text" name="name" placeholder='Last Name' className='form-control' />
            </div>
            <div>
              <input type="tel" name="mobile" placeholder='Mobile Number' className='form-control' />
            </div>
            <div>
              <input type="email" name="email" placeholder='Email' className='form-control' />
            </div>
            <div>
              <input type="password" name='password' placeholder='Password' className='form-control' />
            </div>
            <div className="justify-button">    
              <button className='button '>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
<Footer />
</>



);};

export default Signup;
