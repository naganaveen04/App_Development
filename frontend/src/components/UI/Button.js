import React from 'react';
import './Button.css'; // Assuming you have a CSS file for styling

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
