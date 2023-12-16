import React from 'react';
import Footer from '../Home/Footer';
import "./Login.css"
const Resetpassword = () => {
  return (
<>
<div className="login-container">
        <div className="form-box">
          <h3 className='title'>Reset Password</h3>
          <form action="">
            <div>
              <input type="password" name="password" placeholder='Password' className='form-control' />
            </div>
            <div>
              <input type="password" name="confpassword" placeholder='Confirm Password' className='form-control' />
            </div>
            <div className="justify-button">    
              <button className='button '>Submit</button>
            </div>
          </form>
        </div>
</div>
<Footer />
</>
)}

export default Resetpassword;
