import React from 'react';
import { useState } from 'react';
import '../Forms/MyForms.css';
import { useRef } from 'react';
import greenHandEmoji from '../../assets/greenHandEmoji.png';
import LogIn from '../Forms/LogIn';

const formArray = [LogIn, SignUp];

function SignUp(myForms={formArray}) {

  const [activeIndex, setActiveIndex] = useState(1);
  const ActiveComponent = myForms[activeIndex];

  const changeComponent = (index) => {
    setActiveIndex(index);
  };

  
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const phoneNo = useRef(null);
  const [validate, setValidate] = useState(false);

  function checkInputs() {
    if(firstName.current.value.trim().length 
    &&
     lastName.current.value.trim().length 
    &&
    email.current.value.trim().length 
    &&
    phoneNo.current.value.trim().length
    &&
    password.current.value.trim().length
    &&
    confirmPassword.currentvalue.trim().length
      !== 0){
      setValidate(true);
      if (validate){
        changeComponent(0);
      }
    } 
    else{
      alert('Input field cannot be empty...');
    }
  }

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
            <div className=" input-divy firstName-div">
              <label htmlFor="firstName">First Name</label> <br />
              <input className='input firstName-input' ref={firstName} type="text" />
            </div>
            <div className=" input-div lastName-div">
              <label htmlFor="lastName">Last Name</label> <br />
              <input className='input lastName-input' ref={lastName} type="text" />
            </div>
            <div className=" input-div email-div">
              <label htmlFor="email">Email Address</label> <br />
              <input className='input email-input' ref={email} type="email" />
            </div>
            <div className=" input-div phoneNo-div">
              <label htmlFor="phone-no">Phone Number</label> <br />
              <input className='input phoneNo-input' ref={phoneNo} type="tel" />
            </div>
            <div className=" input-div password-div">
              <label htmlFor="password">Password</label> <br />
              <input className='input password-input' ref={password} type="password" />
            </div>
            <div className="input-div confirm-password-div">
              <label htmlFor="confirm-password">Confirm Password</label> <br />
              <input className='input confirmPassword-input' ref={confirmPassword} type="password" />
            </div>
            <div className=" input-div signUp-btn-div">
            {(validate)?
                <input onClick={checkInputs} onSubmit={checkInputs} className="btn input-btn signUp-btn" type="submit" value="Sign Up" /> 
                : 
                <input onClick={checkInputs} onSubmit={checkInputs} className="btn input-btn signUp-btn" type="submit" value="Sign Up" /> 
            }
            </div>
            <div className="log-in-call">
              <p>
                Do you have an account? <a href>Log In</a>
              </p>
            </div>
          </div>
        </form>
  );
};

export default SignUp;
