import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import ScreenTooBig from './components/ScreenTooBig'

import SignUp from './components/signup/SignUp'
import ChooseAvatar from './components/signup/ChooseAvatar'

import OnBoarding from './components/onBoarding/OnBoarding.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/signup/avatar" component={ChooseAvatar} />         
          <Route exact path="/signup" component={SignUp} />
       	  <Route exact path="/" component={OnBoarding}/>
        </Switch>

        <ScreenTooBig/>
      </div>
    );
  }
}

export default App;
