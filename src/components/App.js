import React from 'react';
import logo from '../arnold.jpg';
import '../css/AppLogo.css';
function App() {

  //TODO:  refactor app name (either logo) or to a upper navbar and header
  //TODO: explore the TMDB App more for information on actors/actresses
  //TODO: Look into ways to sort movies by country and nationality.
  return (

    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/*  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </div>
  );
}

export default App;
