import React from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';

export const Friend = props => {
  console.log("Friend props:", props);

  return (
    <div class="friend-card">
      <div className="friend-name">{props.info.name}</div>
      <div>Age {props.info.age}</div>
      <div>{props.info.email}</div>
    </div>
  )
}

export default Friend;