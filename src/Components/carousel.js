import React, { useState } from 'react';
import '../styles/carousel.css';

const images = [
  '../Assets/DJI_0600.jpg',
  '../Assets/homepage12.png',
  '../Assets/homepage13.png',
  // Add more image paths here
];

const App = () => {
  return (
    <div>
      <h1>My Carousel</h1>
      <carousel images={images} />
    </div>
    
  );
};

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={prevImage}>Prev</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="carousel-image" />
      <button className="next-btn" onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;