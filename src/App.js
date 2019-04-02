import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import OnBoarding from './components/onBoarding/OnBoarding.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <OnBoarding />
      </div>
    );
  }
}

export default App;
