import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import ScreenTooBig from './components/ScreenTooBig'

import SignUp from './components/signup/SignUp'
import ChooseAvatar from './components/signup/ChooseAvatar'
import TrustedPerson from './components/signup/TrustedPerson'

import OnBoarding from './components/onBoarding/OnBoarding.js'
import Testament from './components/testament/Testament';

import Obseques from './components/obseques/Obseques'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/testament" component={Testament} />    
          <Route exact path="/signup/avatar" component={ChooseAvatar} />  
          <Route exact path='/signup/trusted' component={TrustedPerson} />       
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/obseques" component={Obseques}/>
       	  <Route exact path="/" component={OnBoarding}/>
        </Switch>

        <ScreenTooBig/>
      </div>
    );
  }
}

export default App;
