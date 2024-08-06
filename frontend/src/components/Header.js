// src/components/Header.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Supermarket Management System Logo" className="logo" />
        <h1>DOT.MART</h1>
      </div>
      <nav>
        <ul>
         
          {isAuthenticated ? (
            <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              {/* Added Admin link */}
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
