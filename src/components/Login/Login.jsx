import React, { useState } from 'react';
//import './Login.css';
import PropTypes from 'prop-types';

// Setting the const for the environments url
const backendUrl = import.meta.env.VITE_ENV_URL;

async function loginUser(credentials) {
  return fetch(backendUrl+'/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login( { setToken } ) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <form onSubmit={handleSubmit} >
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}