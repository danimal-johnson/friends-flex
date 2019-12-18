import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const isLoggedIn = () => {
  return sessionStorage.getItem("token") ? true : false;
}

// If we're logged in (see above), follow the rest of the
// route. Otherwise, redirect with the rest of the arguments
// to the children
export const PrivateRoute = ({children, ...rest}) => {
  console.log("...rest", rest);
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn() ? 
          ( children ) :
          (
            <Redirect to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />  
  );
}