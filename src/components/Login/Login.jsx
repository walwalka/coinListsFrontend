import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import  useToken from '../useToken';

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
    <div className='p-4'>
      <div className='bg-slate-100 flex-col border-2 border-sky-400 rounded-xl w-1/5 p-4 mx-auto'>
        <h1 className='text-3xl my-2'>Welcome to coinsList!</h1>
        <h3>Please login.</h3>
        <form onSubmit={handleSubmit} >
            <input 
              type="text"
              placeholder="Username"
              onChange={e => setUserName(e.target.value)}
              className='my-1 border-2 border-gray-500 px-2 py-2 w-full text-slate-400'
            />
            <input 
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              className='my-2 border-2 border-gray-500 px-2 py-2 w-full text-slate-400'
            />
          <button type="submit" className='my-2 p-2 bg-sky-300'>Login</button>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}