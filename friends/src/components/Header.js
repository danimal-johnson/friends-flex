import React from 'react';
import { Link, Redirect } from "react-router-dom";

export const Header = props => {
  return (
    <header className="App-header">
      <div id="logo" />
      <Link to="/login" class="hdr-link">Login</Link>
      <Link to="/friends" class="hdr-link">Friend List</Link>
      <button onClick={(props) => {
          localStorage.clear();
          // FIXME: Redirect to login screen. Nest in <Route>?
          // props.history.push("/login");
          return (<Redirect to="/" />)
        }}
      >Log Out</button>
    </header>
  )
}

export default Header;