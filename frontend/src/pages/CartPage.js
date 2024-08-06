// src/pages/CartPage.js

import React, { useContext, useState } from 'react';
import QRCode from 'qrcode.react';
import { CartContext } from '../contexts/CartContext';
import Footer from '../components/Footer';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

  const handleBuyNow = () => {
    setShowPayment(true);
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic here
    console.log('Payment details submitted:', paymentDetails);
    alert('Payment Successful!');
  };

  return (
    <div className="cart-page">
      
      <main>
        <h1>My Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="payment-section">
            <h2>Payment Details</h2>
            <form className="payment-form" onSubmit={handlePaymentSubmit}>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                required
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiry Date (MM/YY)"
                value={paymentDetails.expiryDate}
                onChange={handlePaymentChange}
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                required
              />
              <button type="submit">Submit Payment</button>
            </form>
            <div className="qr-code">
              <QRCode value="Sample QR Code for Payment" />
            </div>
          </div>
        )}
        {cartItems.length > 0 && !showPayment && (
          <button className="add-to-cart" onClick={handleBuyNow}>
            Buy Now
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
