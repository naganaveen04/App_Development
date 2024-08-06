import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './UserPage.css'; // Assuming you have a CSS file for styling

const UserPage = () => {
  return (
    <div className="user-page">
      <Header />
      <main>
        <h1>User Profile</h1>
        <p>View and edit your profile information here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
