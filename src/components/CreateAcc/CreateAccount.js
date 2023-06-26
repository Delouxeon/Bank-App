import { useState } from "react";
import React from "react";
import "./CreateAccount.css";
import SaverbankLogo from "../../assets/SaverbankLogo.png";
import bgImage from "../../assets/bgImage.png";

function CreateAccount({ formComponents }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = formComponents[activeIndex];

  const changeComponent = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="Container">
      <header>
        <img src={SaverbankLogo} alt="Saver Bank Logo" className="BankLogo" />
      </header>
      <main>
        <div className="welcome-section">
          <h1>Welcome to Saver Bank</h1>
          <div className="button-wrapper">
            <a className="btn logInBtn" onClick={() => changeComponent(0)}>
              Log In
            </a>
            <a className="btn SignUpBtn" onClick={() => changeComponent(1)}>
              Sign Up
            </a>
          </div>
        </div>
        {ActiveComponent && <ActiveComponent />}
      </main>
      <section className="bg-img-section">
        <img className="backgroundImg" src={bgImage} alt="Background Image" />
      </section>
    </div>
  );
}

export default CreateAccount;
