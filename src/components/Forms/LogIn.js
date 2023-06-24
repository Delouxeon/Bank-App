import React from 'react';
import '../Forms/MyForms.css';

function LogIn() {
  

  return (
    <form id="logIn-form" className="logIn-form" action="">
          <div className="form-header">
            <h2 className="form-heading">Login</h2>
          </div>
          <div className="inputs-wrapper">
            <div className="email">
              <label htmlFor="email">Email Address</label> <br />
              <input type="email" />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label> <br />
              <input type="password" />
            </div>
            <div className="logIn-btn-div">
              <input className="btn logIn-btn" type="submit" value="Log In" />
            </div>
            <div className="sign-up-call">
              <p>
                Don't have an account? <a href="">Sign Up</a>
              </p>
            </div>
          </div>
        </form>
  );
};

export default LogIn;
