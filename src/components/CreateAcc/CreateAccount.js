import React from 'react';
import SaverbankLogo from '../../assets/SaverbankLogo.png';
import greenHandEmoji from '../../assets/greenHandEmoji.png';

function CreateAccount() {
  return (
    <div className ="createAccountContainer">
      <header>
        <img src = {SaverbankLogo} alt='SaverBank Logo'/>
      </header>
      <form action="">
        <div className="form-header">
          <h1 className="form-heading">Create an Account</h1>
          <span>
            <img src={greenHandEmoji} alt="" />
          </span>
          <p className="form-header-p">Please enter required information</p>
        </div>
        <div className="inputs-wrapper">
          <div className="first-name">
            <label htmlFor="fname">First Name</label> <br />
            <input type="text" />
          </div>
          <div className="last-name">
            <label htmlFor="lname">Last Name</label> <br />
            <input type="text" />
          </div>
          <div className="email">
            <label htmlFor="email">Email Address</label> <br />
            <input type="email" />
          </div>
          <div className="phone-no">
            <label htmlFor="phone-no">Phone Number</label> <br />
            <input type="tel" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label> <br />
            <input type="password" />
          </div>
          <div className="confirm-password">
            <label htmlFor="confirm-password">Confirm Password</label> <br />
            <input type="password" />
          </div>
          <div className="signUp-btn">
            <input className="btn" type="submit" value= "Sign Up" />
          </div>
          <div className="log-in-call">
            <p>Do you have an account? <a href>Login</a></p> 
          </div>
        </div>
      </form>
      <section className='bg-img-section'></section>
    </div>
  );
}

export default CreateAccount;
