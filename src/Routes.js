import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Experts from './Pages/Experts/Experts';
import Category from './Pages/Category';
import Detail from './Pages/Detail';
import Nav from './Components/Nav/Nav';
import { API_URL } from './config';

export default function Routes() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/store/category`)
      .then(res => res.json())
      .then(categoryList => setCategoryList(categoryList.category_lists));
  }, []);

  return (
    <Router>
      <Nav categoryList={categoryList} />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/experts" component={Experts} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/category/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
