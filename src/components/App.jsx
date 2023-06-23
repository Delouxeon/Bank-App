import * as React from 'react';
import './App.css';
import {Navigate, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import CreateAccount from "./CreateAcc/CreateAccount";




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

