import React, { useState } from 'react';
import '../Forms/MyForms.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  const email = useRef(null);
  const password = useRef(null);
  const [validate, setValidate] = useState(false);

  function checkInputs() {
    if(email.current.value.trim().length && password.currentvalue.trim().length !== 0){
      setValidate(true);
    } 
    else{
      alert('Input field cannot be empty...');
    }
  }

  return (
    <form id="logIn-form" className="logIn-form" action="">
          <div className="form-header">
            <h2 className="form-heading">Log In</h2>
          </div>
          <div className="inputs-wrapper">
            <div className="email-div">
              <label htmlFor="email">Email Address</label> <br />
              <input className='input email-input' ref={email} type="email" />
            </div>
            <div className="password-div">
              <label htmlFor="password">Password</label> <br />
              <input className='input password-input' ref={password} type="password" />
            </div>
            <div className="logIn-btn-div">
              {/* {
              (validate === true)?
                <Link to='../../../public/userPage.html'>
                  <input onClick={checkInputs} onSubmit={checkInputs} className="btn input-btn logIn-btn" type="submit" value="Log In" />
                </Link>
              : 
              <input onClick={checkInputs} onSubmit={checkInputs} className ="btn input-btn logIn-btn" type="submit" value="Log In" />
              } */}
              <Link to='../../../public/userPage.html'>
                  <input onClick={checkInputs} onSubmit={checkInputs} className="btn input-btn logIn-btn" type="submit" value="Log In" />
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
