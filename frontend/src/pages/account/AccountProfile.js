import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import './AccountProfile.css';

const AccountProfile = () => {
  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <h2><strong>My Account</strong></h2>
      <div className="profile-details">
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <h2><strong>My Cart</strong></h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AccountProfile;
