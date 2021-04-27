import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Category from './Pages/Category/index';
import Experts from './Pages/Experts/Experts';

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Experts} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/category" component={Category} />
      </Switch>
    </Router>
  );
}
