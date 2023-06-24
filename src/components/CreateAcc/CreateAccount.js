import { useState } from 'react';
import React from 'react';
import './CreateAccount.css'
import SaverbankLogo from '../../assets/SaverbankLogo.png';
import greenHandEmoji from '../../assets/greenHandEmoji.png';

function CreateAccount({formArray}) {

  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = formArray[activeIndex];

  const changeComponent = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="Container">
      <header>
        <img src={SaverbankLogo} alt="Saver Bank Logo" />
      </header>
      <main>
        <h1>Welcome to Saver Bank</h1>
        <button className='btn logInBtn' onClick={() => changeComponent(0)}>Log In</button>
        <button className='btn SignUp' onClick={() => changeComponent(1)}>Sign Up</button>
        {ActiveComponent && <ActiveComponent />}
      </main>
      <section className="bg-img-section"></section>
    </div>
  );
}

export default CreateAccount;
