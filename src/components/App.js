import * as React from 'react';
import './App.css';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Dashboard from "./UserDashboard/Dashboard";
import CreateAccount from "./CreateAcc/CreateAccount";
import DeleteAccount from "./DeleteAcc/DeleteAccount";
import UpdateAccount from "./UpdateAcc/UpdateAccount";




function App() {
  const components = [UpdateAccount, DeleteAccount];

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CreateAccount />} />
        <Route path="/public/userPage.html" element= {<Dashboard components={components}/>} />
      </Routes>
    </div>
  );
}

export default App;

