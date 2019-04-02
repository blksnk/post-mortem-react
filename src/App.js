import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScreenTooBig from './components/ScreenTooBig'

import OnBoarding from './components/onBoarding/OnBoarding.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <OnBoarding />
          <ScreenTooBig />
      </div>
    );
  }
}

export default App;
