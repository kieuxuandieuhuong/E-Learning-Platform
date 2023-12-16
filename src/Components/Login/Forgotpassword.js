import React from "react";
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
   <>
   <div className="login-container">
        <div className="form-box">
          <h3 className='title'>Reset Your Password</h3>
          <p>We will sent you an email to reset your password</p>
          <form action="">
            <div>
              <input type="email" name="email" placeholder='Email' className='form-control' />
            </div>
            <div className="justify-button">
              <button className='button' type="submit">Submit</button>
              <Link className="button"to="/Login">Cancel</Link>
            </div>
          </form>
        </div>
</div>
<Footer />
   </>
  );
};

export default Forgotpassword;