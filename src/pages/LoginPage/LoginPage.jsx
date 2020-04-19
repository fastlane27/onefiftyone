import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/form.module.scss';
import userAPI from '../../services/userAPI';

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
      await userAPI.login(loginData);
      props.handleSignupOrLogin();
      props.history.push('/');
    } catch(err) {
      updateMessage(err.message);
    }
  }

  const isFormInvalid = () => !(loginData.email && loginData.password);

  const updateMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className={styles.form}>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          name="password"
          onChange={handleChange}
        />
        <p>{message}</p>
        <button type="submit" disabled={isFormInvalid()}>Log In</button>
      </form>
      <Link to='/' className={styles.link}>Cancel</Link>
    </div>
  );
}

export default LoginPage;
