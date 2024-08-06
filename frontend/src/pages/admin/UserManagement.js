import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Smith Devis', email: 'smith@gmail.com' },
    { id: 3, name: 'Xavier', email: 'xavier@gmail.com' },
    { id: 4, name: 'Anand', email: 'anand@gmail.com' },
    { id: 5, name: 'Stanis Paul', email: 'paul@gmail.com' },
    { id: 6, name: 'Karthik', email: 'karthi@gmail.com' },
    { id: 7, name: 'Dinakar', email: 'dina@gmail.com' },
    { id: 8, name: 'Cowtham', email: 'cow@gmail.com' },
    { id: 9, name: 'Kingsley', email: 'king@gmail.com' },
    // Add more users here
  ]);

  return (
    <div className="user-management">
      <h2>Users who are in DOT.MART</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
