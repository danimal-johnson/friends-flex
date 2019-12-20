import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import Header from './components/Header';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header props={props} />
        <Switch>
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
