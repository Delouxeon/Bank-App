import React from 'react';
import '../Forms/MyForms.css';
import greenHandEmoji from '../../assets/greenHandEmoji.png';

function SignUp() {
  

  return (
    <form className="signUp-form" action="">
          <div className="form-header">
            <div className='h2-div'>
              <h2 className="form-heading">Create an Account</h2>
              <span className='greenHandBox'>
                <img src={greenHandEmoji} alt="green hand emoji" className='greenHandEmoji' />
              </span>
            </div>
            <p className="form-header-p">Please enter required information</p>
          </div>
          <div className="inputs-wrapper">
            <div className=" input-div firstName-div">
              <label htmlFor="firstName">First Name</label> <br />
              <input className='input firstName-input' type="text" />
            </div>
            <div className=" input-div lastName-div">
              <label htmlFor="lastName">Last Name</label> <br />
              <input className='input lastName-input' type="text" />
            </div>
            <div className=" input-div email-div">
              <label htmlFor="email">Email Address</label> <br />
              <input className='input email-input' type="email" />
            </div>
            <div className=" input-div phoneNo-div">
              <label htmlFor="phone-no">Phone Number</label> <br />
              <input className='input phoneNo-input' type="tel" />
            </div>
            <div className=" input-div password-div">
              <label htmlFor="password">Password</label> <br />
              <input className='input password-input' type="password" />
            </div>
            <div className="input-div confirm-password-div">
              <label htmlFor="confirm-password">Confirm Password</label> <br />
              <input className='input confirmPassword-input' type="password" />
            </div>
            <div className=" input-div signUp-btn-div">
              <input className="btn input-btn signUp-btn" type="submit" value="Sign Up" />
            </div>
            <div className="log-in-call">
              <p>
                Do you have an account? <a href>Login</a>
              </p>
            </div>
          </div>
        </form>
  );
};

export default SignUp;
