import React from "react";
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
   <>
   <div className="container login-wrapper">
    <div className="row">
      <div className="col">
        <div className="login-card">
          <h3 className='login-title'>Reset Your Password</h3>
          <p>We will sent you an email to reset your password</p>
          <form action="">
            <div>
              <input type="email" name="email" placeholder='Email' className='form-control' />
            </div>
            <div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="justify-button">
              <button className='button' type="submit">Submit</button>
              <Link className="button-cancel"to="/Login">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
<Footer />
   </>
  );
};

export default Forgotpassword;