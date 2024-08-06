// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin </h2>
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/products">Add Products</Link></li>
        <li><Link to="/admin/users">User Details</Link></li>
        <li><Link to="/admin/orders">Order Details</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
