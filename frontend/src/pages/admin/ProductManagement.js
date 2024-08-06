import React, { useState } from 'react';
import './ProductManagement.css';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Milk', price: 10, description: 'Fresh milk' },
    { id: 2, name: 'Juice', price: 20, description: 'Fresh mixed' },
    { id: 3, name: 'Cakes', price: 200, description: 'High Quality' },
    // Add more products here
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: '', price: '', description: '' });
  };

  return (
    <div className="product-management">
      <h2>Add Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>: ₹{product.price} - {product.description}
          </li>
        ))}
      </ul>
      <h3>Add Product</h3>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductManagement;
