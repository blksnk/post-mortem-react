import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import ScreenTooBig from './components/ScreenTooBig'

import Home from './components/home/Home'

import SignUp from './components/signup/SignUp'
import ChooseAvatar from './components/signup/ChooseAvatar'
import TrustedPerson from './components/trusted/TrustedPerson'
import TrustedIntro from './components/trusted/TrustedIntro'

import LogIn from './components/login/LogIn'

import OnBoarding from './components/onBoarding/OnBoarding'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/avatar" component={ChooseAvatar} />  

          <Route exact path='/login' component={LogIn}/>
             
          <Route exact path='/trusted/add' component={TrustedPerson} />
          <Route exact path='/trusted/' component={TrustedIntro} />

       	  <Route exact path="/onboarding" component={OnBoarding}/>

          <Route exact path='/' component={Home}/>
        </Switch>

        <ScreenTooBig/>
      </div>
    );
  }
}

export default App;
