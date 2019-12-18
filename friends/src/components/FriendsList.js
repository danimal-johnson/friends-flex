import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import Friend from './Friend';

export const Friends = () => {
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get("/friends")
    .then(res => {
      setFriendData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  },[]);

  return (
    <div className="friend-container">

      
      <h2>Cast of Characters</h2>
      <div className="friend-list">
        {friendData.map(friend =>
          <Friend key={friend.id} info={friend} /> )
        }
      </div>
    </div>
  )
}

export default Friends;