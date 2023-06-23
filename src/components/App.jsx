import * as React from 'react';
import './App.css';
import {Navigate, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import CreateAccount from "./CreateAcc/CreateAccount";
import UpdateAccount from "./UpdateAccount/UpdateAccount";
import DeleteAccount from "./DeleteAccount/DeleteAccount";



function App() {
  return (
    <div>
        <Routes> 
          <Route exact path="/" element={<CreateAccount />} />
          {/* <Navigate to="/" /> */}
        </Routes>
    </div>
  );
}

export default App;

