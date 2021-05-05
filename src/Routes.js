import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
<<<<<<< HEAD
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Category from './Pages/Category/index';
import Experts from './Pages/Experts/Experts';
=======
>>>>>>> 91bf951... Add:Nav바 리뷰반영 최종거의 직전

function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Experts} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/category" component={Category} />
      </Switch>
    </Router>
  );
}

export default Routes;
