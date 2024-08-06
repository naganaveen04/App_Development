// src/pages/admin/AdminPage.js

import React from 'react';
import Sidebar from '../../components/Sidebar';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <h1>Admin Information and Details of DOT.MART</h1>
        <p></p>
        <p>Welcome admin. Use the sidebar to navigate through different options.</p>
        
        <div className="project-info">
          <h2>About the Project</h2>
          <p>DOT.MART is a comprehensive Supermarket Management System designed to streamline various aspects of supermarket operations. The system includes features such as product management, user authentication, cart management, and order processing. By leveraging modern web technologies, DOT.MART aims to provide a seamless and efficient shopping experience for both administrators and customers.</p>
          <p></p>
          <h3>Key Features:</h3>
          <ul>
            <li>Product Management: Add, update, and remove products from the inventory.</li>
            <p></p>
            <li>User Authentication: Secure login and registration for users and admins.</li>
            <p></p>
            <li>Cart Management: Add items to the cart, view cart details, and proceed to checkout.</li>
            <p></p>
            <li>Order Processing: Manage orders, track order status, and handle customer inquiries.</li>
          </ul><p></p><p></p><p></p>
          <p>With DOT.MART, managing a supermarket has never been easier. The system is built with a user-friendly interface and robust backend, ensuring reliability and performance.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
