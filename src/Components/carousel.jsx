import React, { useState } from 'react';
import '../styles/carousel.css';

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