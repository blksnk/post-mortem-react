import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import SignUp from './components/signup/SignUp'
import ChooseAvatar from './components/signup/ChooseAvatar'

import ScreenTooBig from './components/ScreenTooBig.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/signup/avatar" component={ChooseAvatar} />         
          <Route exact path="/signup" component={SignUp} />
        </Switch>

        <ScreenTooBig/>
      </div>
    );
  }
}

export default App;
