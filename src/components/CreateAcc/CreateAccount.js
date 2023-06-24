import React from 'react';
import './CreateAccount.css'
import SaverbankLogo from '../../assets/SaverbankLogo.png';
import greenHandEmoji from '../../assets/greenHandEmoji.png';

function CreateAccount() {
  return (
    <div className="Container">
      <header>
        <img src={SaverbankLogo} alt="Saver Bank Logo" />
      </header>
      <main>
        <h1>Welcome to Saver Bank</h1>
        <button className='btn logInBtn'>Log In</button>
        <button className='btn SignUp'>Sign Up</button>
      </main>
      <section className="bg-img-section"></section>
    </div>
  );
}

export default CreateAccount;
