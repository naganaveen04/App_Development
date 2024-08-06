import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthStyles.css';
import { AuthContext } from '../../contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    navigate('/home'); // Redirect to home page on successful login
  };

  return (
    <div className="auth-container login-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>DOT.MART</h1>
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
