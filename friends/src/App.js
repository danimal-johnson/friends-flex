import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import Login from './components/Login';
import Friends from './components/Friends';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <button onClick={() => localStorage.clear()}>Log Out</button>
        </header>
        <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Friend List</Link>
            </li>
          </ul>
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
