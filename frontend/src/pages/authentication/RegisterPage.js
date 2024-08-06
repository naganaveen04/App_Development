import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import { AuthContext } from '../../contexts/AuthContext';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!termsAccepted) {
      setError('You must accept the terms and conditions');
      return;
    }

    await register({ firstName, lastName, email, password });
    navigate('/home'); // Redirect to home page on successful registration
  };

  return (
    <div className="auth-container register-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>DOT.MART</h1>
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <div className="terms-container">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <label>
            I accept the <a href="/terms">Terms and Conditions</a>
          </label>
        </div>
        <button type="submit">Register</button>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
