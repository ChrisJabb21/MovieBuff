import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./components/SearchMovies";
import './css/style.css';
import './css/normalize.css';

//import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <NavBar/>
 <div className="container">
        <App/>
        <h3 className="title" style={{textAlign: "center"}}> Put that cookie down</h3>
        <h1 className="title"><span role="img" aria-label="popcorn"> 🍿 </span>Movie Buff <span role="img" aria-label="popcorn"> 🍿</span> </h1>
    <SearchMovies/>
</div>
<div className="container"></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();