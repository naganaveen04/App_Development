import React from 'react';
import './ProductItem.css'; // Assuming you have a CSS file for styling

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
