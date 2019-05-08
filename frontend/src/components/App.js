import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from '../containers/Menu';
import LoginForm from '../containers/LoginForm';
import SignupForm from '../containers/SignupForm';
import HomePage from '../components/HomePage'; 
import LogoutPage from '../components/LogoutPage';
import SignupConfirm from '../components/SignupConfirm';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path='/login' exact component={LoginForm} />
          <Route path='/signup' exact component={SignupForm} />
          <Route path='/home' exact component={HomePage} />
          <Route path='/logout' exact component={LogoutPage} />
          <Route path='/signup/confirm' exact component={SignupConfirm} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
