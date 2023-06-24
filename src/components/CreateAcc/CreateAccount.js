import React from 'react';
import SaverbankLogo from '../../assets/SaverbankLogo.png';
import greenHandEmoji from '../../assets/greenHandEmoji.png';

function CreateAccount() {
  return (
    <div className="createAccountContainer">
      <header>
        <img src={SaverbankLogo} alt="Saver Bank Logo" />
      </header>
      <section></section>
      <section className="forms-wrapper">
        <form id="logIn-form" className="logIn-form" action="">
          <div className="form-header">
            <h1 className="form-heading">Login</h1>
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
        <form className="signUp-form" action="">
          <div className="form-header">
            <h1 className="form-heading">Create an Account</h1>
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
      </section>

      <section className="bg-img-section"></section>
    </div>
  );
}

export default CreateAccount;
