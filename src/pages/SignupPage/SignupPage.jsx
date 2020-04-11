import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';

function SignupPage(props) {
  const [message, setMessage] = useState('');

  const updateMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm {...props} updateMessage={updateMessage} />
      <p>{message}</p>
      <Link to='/'>Cancel</Link>
    </div>
  );
}

export default SignupPage;
