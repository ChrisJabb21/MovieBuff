import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./components/SearchMovies";
import './css/style.css';
import './css/normalize.css';

//import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
 <div className="container">
        <App/>
        <h1 className="title">Movie Buff 🍿 </h1>
    <SearchMovies/>
</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
////////project from scrimba index.js
/*
import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./SearchMovies";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root')); */