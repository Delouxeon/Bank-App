import * as React from 'react';
import './App.css';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Dashboard from "./UserDashboard/Dashboard";
import CreateAccount from "./CreateAcc/CreateAccount";
import DeleteAccount from "./DeleteAcc/DeleteAccount";
import UpdateAccount from "./UpdateAcc/UpdateAccount";
import SendAndReceive from "./SendAndReceive/SendAndReceive";
import Transactions from "./ViewTransactions/Transactions";
import LogIn from './Forms/LogIn';
import SignUp from './Forms/SignUp';




function App() {
  const components = [UpdateAccount, DeleteAccount, SendAndReceive, Transactions];
  const formArray = [LogIn, SignUp];

  return (
    <div>
      <Routes>
        <Route exact path="/" element= {<CreateAccount formComponents={formArray}/>} />
        <Route path="/public/userPage.html" element= {<Dashboard components={components}/>} />
      </Routes>
    </div>
  );
}

export default App;

