import React, { useState } from 'react';
import '../Forms/MyForms.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  

  const data1 = useRef(null);
  const data2 = useRef(null);
  const [validate, setValidate] = useState(false);

  function checkInputs() {
    if(data1.value.trim().length === 0){
      alert('Input field cannot be empty...')
    } 
    else if(data2.value.trim().length === 0){
      alert('Input field cannot be empty...')
    }
    else{
      setValidate(true);
    }
  }

  return (
    <form id="logIn-form" className="logIn-form" action="">
          <div className="form-header">
            <h2 className="form-heading">Log In</h2>
          </div>
          <div className="inputs-wrapper">
            <div className="email">
              <label htmlFor="email">Email Address</label> <br />
              <input className='input email-input' ref={data1} type="email" />
            </div>
            <div className="password-div">
              <label htmlFor="password">Password</label> <br />
              <input className='input password-input' ref={data2} type="password" />
            </div>
            <div className="logIn-btn-div">
              <Link to= '../../../public/userPage.html'>
                <input className="btn input-btn logIn-btn" type="submit" value="Log In" />
              </Link>
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
