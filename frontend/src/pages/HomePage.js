import React, { useState, useEffect } from 'react';
import './HomePage.css';

const images = [
  "/images/doordash-pf82pJc-4pc-unsplash.jpg",
  "/images/fikri-rasyid-ezeC8-clZSs-unsplash.jpg",
  "/images/kenny-eliason-SvhXD3kPSTY-unsplash.jpg",
  "/images/dennis-siqueira-QnMeRW36-zY-unsplash.jpg"
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Hey buddy...Search a products here..."
        />
      </div>
      <main>
        <div className="product-slider">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              className={`product-image ${index === currentIndex ? 'visible' : ''}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
