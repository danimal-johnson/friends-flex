import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const Login = props => {
  const [credentials, setCredentials] =
    useState ({ username: "Lambda School", password: "i<3Lambd4"}); 

  const handleChange = props => e => {
    setCredentials( {
      ...credentials, [props]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting the form");
    console.log(credentials);

    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => {
        console.log("Error:", err);
      });
    }

    // ---- The Form ----
  return (
    <div>
      <h2>Please Login Here</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange("username")}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange("password")}
          />
          <button>Log in</button>
          {/* && Some logging-in indicator */}
        </form>
      </div>
    </div>
  )

}

export default Login;