import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Character = ({ url }) => {

  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(url)
      .then(res => setUser(res.data))
  }, [])

  console.log(user)

  return (
    <>
      <div className="card-container">
        <div className="image">
          <img src={user.image} alt="" />
        </div>
        <div className="text1">
          <p><b>Name: </b>{user.name}</p>
          <p><b>Type: </b>{user.species}</p>
          <p><b>Origin: </b>{user.origin?.name}</p>
        </div>
        <div className="live">
          {
            user.status === 'Alive' ? (
              <>
                <div className="status"></div>
                <p>{user.status}</p>
              </>
            ) : user.status === 'Dead'?(
              <>
                <div className="status red"></div>
                <p>{user.status}</p>
              </>
            ) : (
              <>
                <div className="status orange"></div>
                <p>{user.status}</p>
              </>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Character;