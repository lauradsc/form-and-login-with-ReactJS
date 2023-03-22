import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './login';
import { Register } from './register';
import './App.css';

function App() {

  const [currentform, setcurrentform] = useState('login');

  const toggleForm = (formName) => {
    setcurrentform(formName);
  };
  return (
    <div className="App">
      {
        currentform === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
