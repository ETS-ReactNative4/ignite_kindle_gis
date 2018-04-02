import React, { Component } from 'react';
import logo from './images/login.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={logo} alt="logo" />
      <h1> Our new React Project is ready </h1>
      </div>
    );
  }

}
export default App;

