import React, { useEffect } from "react";
import "./Login.css";
import { IoCloseSharp } from "react-icons/io5";
import CustomInput from "./CustomInput";

const Login = () => {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    const handleRegisterClick = () => {
      wrapper.classList.add('active');
    };

    const handleLoginClick = () => {
      wrapper.classList.remove('active');
    };

    registerLink.addEventListener('click', handleRegisterClick);
    loginLink.addEventListener('click', handleLoginClick);

    // Cleanup event listeners when component unmounts
    return () => {
      registerLink.removeEventListener('click', handleRegisterClick);
      loginLink.removeEventListener('click', handleLoginClick);
    };
  }, []);

  return (
    <div className="wrapper">
      <span className='icon-close'> <IoCloseSharp /></span>

      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <CustomInput type="email" label="Email" i_id="login-email" i_class="input-email" name="email" />
          <CustomInput type="password" label="Password" i_id="login-password" i_class="input-password" name="password" />
          <div className='forgot'>
            <a href='#'> Forgot Password?</a>
          </div>
          <button type ="submit" className='btn'> Login</button>
          <div type="login-register">
            <p>Don't have an account?
              <a href='#' className='register-link'> Register</a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#">
          <CustomInput type="text" label="Firstname" i_id="register-firstname" i_class="input-firstname" name="firstname" />
          <CustomInput type="text" label="Lastname" i_id="register-lastname" i_class="input-lastname" name="lastname" />
          <CustomInput type="email" label="Email" i_id="register-email" i_class="input-email" name="email" />
          <CustomInput type="password" label="Password" i_id="register-password" i_class="input-password" name="password" />
          <div className='term'>
            <label><input type='checkbox'/>I agree to the term & conditions</label>
          </div>
          <button type ="submit" className='btn'> Register </button>
          <div type="login-register">
            <p>Already have an account ?
              <a href='#' className='login-link'> Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
