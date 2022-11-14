import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function WelcomeMessage({name}){

  const message = "Welcome"

  return (<p>{message} {name}! Come and learn React!</p>)
}

function App() {

  const [name, setName] = useState("");


function handleChange(e){
  setName(e.target.value)
}

function handleSubmit(event) {
  alert(`Welcome ${name}, Come and learn React!`);
  event.preventDefault();
}



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSubmit}>        
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />        
        </label>
          <input type="submit" value="Submit" />
        </form>
        <WelcomeMessage name={name}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
