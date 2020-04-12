import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';

function LoginPage(props) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(loginData);
      props.handleSignupOrLogin();
      props.history.push('/');
    } catch(err) {
      updateMessage(err.message);
    }
  }

  const isFormInvalid = () => {
    return !(loginData.email && loginData.password);
  }

  const updateMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={loginData.email} name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" value={loginData.password} name="password" onChange={handleChange} />
        <button type="submit" disabled={isFormInvalid()}>Log In</button>
      </form>
      <p>{message}</p>
      <Link to='/'>Cancel</Link>
    </div>
  );
}

export default LoginPage;
