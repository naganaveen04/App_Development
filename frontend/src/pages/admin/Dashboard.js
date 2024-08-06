// src/pages/admin/Dashboard.js

import React from 'react';
import Sidebar from '../../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Admin Information and Details of the DOT.MART</h1>
        <p>Welcome admin. Use the sidebar to navigate through different options.</p>
      </div>
    </div>
  );
};

export default Dashboard;
