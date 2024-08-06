import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './ProductPage.css';

// Import product images
import VegetablesImage from '../assets/Images/Vegetables.jpg';
import ToothPasteImage from '../assets/Images/ToothPaste.jpg';
import IceCreamImage from '../assets/Images/Icecream.jpg';
import MilkImage from '../assets/Images/Milk.jpg';
import FruitsImage from '../assets/Images/Fruits.jpg';
import JuiceImage from '../assets/Images/Juice.jpg';
import WineImage from '../assets/Images/Wine.jpg';
import ToysImage from '../assets/Images/Toys.jpg';
import ShampooImage from '../assets/Images/Shampoo.jpg';
import SoapImage from '../assets/Images/Soap.jpg';
import WatchesImage from '../assets/Images/Watches.jpg';
import ShoesImage from '../assets/Images/Shoes.jpg';

// Array of products with imported images
const products = [
  {
    id: 1,
    title: 'Vegetables',
    description: 'Healthy and Fresh...',
    image: VegetablesImage,
    price: 10.00,
  },
  {
    id: 2,
    title: 'Toothpaste',
    description: 'Clean your teeth...',
    image: ToothPasteImage,
    price: 15.00,
  },
  {
    id: 3,
    title: 'Ice Cream',
    description: 'Tasteful chill...',
    image: IceCreamImage,
    price: 20.00,
  },
  {
    id: 4,
    title: 'Milk',
    description: 'Strengthen your bones...',
    image: MilkImage,
    price: 25.00,
  },
  {
    id: 5,
    title: 'Fruits',
    description: 'Tasty and Healthy...',
    image: FruitsImage,
    price: 10.00,
  },
  {
    id: 6,
    title: 'Juice',
    description: 'Delicious and refreshing...',
    image: JuiceImage,
    price: 15.00,
  },
  {
    id: 7,
    title: 'Wine',
    description: 'Enjoy a fine wine...',
    image: WineImage,
    price: 20.00,
  },
  {
    id: 8,
    title: 'Toys',
    description: 'Fun for kids...',
    image: ToysImage,
    price: 25.00,
  },
  {
    id: 9,
    title: 'Shampoo',
    description: 'Smooth and clean...',
    image: ShampooImage,
    price: 25.00,
  },
  {
    id: 10,
    title: 'Soap',
    description: 'For a refreshing clean...',
    image: SoapImage,
    price: 25.00,
  },
  {
    id: 11,
    title: 'Watches',
    description: 'Keep track of time...',
    image: WatchesImage,
    price: 25.00,
  },
  {
    id: 12,
    title: 'Shoes',
    description: 'Step in style...',
    image: ShoesImage,
    price: 25.00,
  },
];

const ProductPage = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const getCartQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              />
              
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">₹{product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            {getCartQuantity(product.id) > 0 && (
              <p className="cart-quantity">In Cart: {getCartQuantity(product.id)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
