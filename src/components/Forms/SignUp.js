import React from 'react';
import './forms.css'

function SignUp() {
  

  return (
    <form className="signUp-form" action="">
          <div className="form-header">
            <h2 className="form-heading">Create an Account</h2>
            <span>
              <img src={greenHandEmoji} alt="green hand emoji" />
            </span>
            <p className="form-header-p">Please enter required information</p>
          </div>
          <div className="inputs-wrapper">
            <div className="firstName-div">
              <label htmlFor="fname">First Name</label> <br />
              <input type="text" />
            </div>
            <div className="lastName-div">
              <label htmlFor="lname">Last Name</label> <br />
              <input type="text" />
            </div>
            <div className="email-div">
              <label htmlFor="email">Email Address</label> <br />
              <input type="email" />
            </div>
            <div className="phoneNo-div">
              <label htmlFor="phone-no">Phone Number</label> <br />
              <input type="tel" />
            </div>
            <div className="password-div">
              <label htmlFor="password">Password</label> <br />
              <input type="password" />
            </div>
            <div className="confirm-password-div">
              <label htmlFor="confirm-password">Confirm Password</label> <br />
              <input type="password" />
            </div>
            <div className="signUp-btn-div">
              <input className="btn signUp-btn" type="submit" value="Sign Up" />
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
