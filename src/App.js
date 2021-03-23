//Dependency Imports
import React, { useState } from 'react'
//Styling imports
import './App.css';
import { Button } from 'react-bootstrap';

//Component imports
import Home from './components/Home';
import Registration from './components/Registration';
import Account from './components/Account';
//API function imports
import useApplicationData from "./hooks/useApplicationData"
import useVisualMode from "./hooks/useVisualMode"

function App() {
  
  const HOME = "HOME"
  const userAccount = "ACCOUNT"
  const userRegister = "REGISTER"

  // visualMode hook controls which components are rendered on the screen
  const { mode, home, account, register } = useVisualMode(HOME)

  // State Management
  const { state, setAccountInfo } = useApplicationData()
  

  const [modalShow, setModalShow] = useState(false);
  const modalToggle = () => modalShow ? setModalShow(false) : setModalShow(true)
 
   

  return (
    <body className="App">
    
        {mode === "HOME" &&
          <Home
          account={() => account(userAccount)} 
          register={() => register(userRegister)}
          />     
        }
        {mode === "REGISTER" &&
          <div>
          <Registration onSubmit={setAccountInfo} mode={account}>

          </Registration>
          <Button variant="contained" color="primary" 
          onClick={() => home(HOME)} >Back
          </Button>
          </div>
        }
        {mode === "ACCOUNT" && 
          <div>
          <h1>{state.name.first}'s Account</h1>
          <Button variant="primary" onClick={() => modalToggle()}>
          Display Account Toggle
          </Button>
          <Account show={modalShow} userInfo={state} modalToggle/>
          <Button onClick={() => home(HOME)}>Back</Button>
          </div>
          }
    
    </body>
  );
}

export default App;
