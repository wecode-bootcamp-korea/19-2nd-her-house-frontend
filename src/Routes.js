import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Category from './Pages/Category';
import Experts from './Pages/Experts/Experts';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/experts" component={Experts} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/category" component={Category} />
      </Switch>
    </Router>
  );
}

export default Routes;
