import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Sample from './sample';
import SimpleAppBar from './Appbar';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
      <div>
        <SimpleAppBar />
        <ul>
        </ul>
        <li>
        <Sample />
        </li>
        </div>
      
      
    );
  }
}
ReactDOM.render(<sample />, document.getElementById('root'));

export default App;
