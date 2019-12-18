import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import Friend from './Friend';

export const Friends = () => {
  const [friendData, setFriendData] = useState([]);
  const [newFriend, setNewFriend] = useState({
    id: 0,
    name: "",
    age: 0,
    email: "",
  });
  const [listNeedsUpdating, setUpdateList ] = useState();

  useEffect(() => {
    axiosWithAuth()
    .get("/friends")
    .then(res => {
      setFriendData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  },[newFriend]);

  const handleChange = props => e => {
    setNewFriend( {
      ...newFriend, [props]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log(res);
        setUpdateList(listNeedsUpdating + 1);
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="friend-container">
      <div className="friend-form">

      <h4>Add a new friend.</h4>
        <input type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange("name")}
        />
        <input type="text"
          name="age"
          placeholder="Age"
          onChange={handleChange("age")}
        />
        <input type="text"
          name="email"
          placeholder="email"
          onChange={handleChange("email")}
        />

        <button
          type="button"
          onClick={handleSubmit}
        >Add Friend
        </button>
      </div>

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