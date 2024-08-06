import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h2>{item.title}</h2>
        <p>${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
