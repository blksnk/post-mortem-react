import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import ScreenTooBig from './components/global/ScreenTooBig'
import CheckLogin from './components/global/CheckLogin'

import Home from './components/home/Home'
import SignUp from './components/signup/SignUp'
import ChooseAvatar from './components/signup/ChooseAvatar'
import TrustedPerson from './components/trusted/TrustedPerson'
import TrustedIntro from './components/trusted/TrustedIntro'
import LogIn from './components/login/LogIn'
import OnBoarding from './components/onBoarding/OnBoarding'
import Testament from './components/testament/Testament';
import Obseques from './components/obseques/Obseques'
import OrganesIntro from './components/organes/OrganesIntro'
import OrganesChoice from './components/organes/OrganesChoice'
import OrganesRefus from './components/organes/OrganesRefus'
import OrganesPick from './components/organes/OrganesPick'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/testament" component={Testament} />    
          <Route exact path="/signup/avatar" component={ChooseAvatar} />  
          <Route exact path='/signup/trusted' component={TrustedPerson} />       
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/avatar" component={ChooseAvatar} />  

          <Route exact path='/login' component={LogIn}/>
             
          <Route exact path='/trusted/add' component={TrustedPerson} />
          <Route exact path='/trusted/' component={TrustedIntro} />

       	  <Route exact path="/onboarding" component={OnBoarding}/>
          <Route exact path="/obseques" component={Obseques}/>

          <Route exact path='/organes/intro' component={OrganesIntro}/>
          <Route exact path='/organes/choisir' component={OrganesChoice}/>
          <Route exact path='/organes/refus' component={OrganesRefus}/>
          <Route exact path='/organes/pick' component={OrganesPick}/>


          <Route exact path='/' component={Home}/>
        </Switch>

        <ScreenTooBig/>
        <CheckLogin/>

      </div>
    );
  }
}

export default App;
