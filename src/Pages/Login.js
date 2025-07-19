import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{backgroundColor: 'white'}}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login-options">
          <span className="link" onClick={() => alert('Redirect to forgot password')}>
            Forgot Password?
          </span>
        </div>

        <button type="submit" className="login-button">Login</button>

        <p className="signup-link">
          Don’t have an account?{' '}
          <span className="link" onClick={() => navigate('/signup')}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
