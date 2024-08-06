import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 DOT.MART. All rights reserved.
      
        <a href="/terms">Terms and Conditions</a> | 
        <a href="/privacy">Privacy Policy</a> | 
        <a href="/contact">Contact Us</a>
    
      </p>
    </footer>
  );
};

export default Footer;
