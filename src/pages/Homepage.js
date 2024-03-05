import React from 'react';
import '../styles/Homepage.css';
// import { Link } from "react-router-dom";
import logoOfficial from "../Assets/logoOfficial.png"
// import cart from "../Assets/cart.png"
import homepage from "../Assets/homepage.jpg"




function Homepage() {
  return (
    <div className="homepage">
      <img
            className="logo1"
            loading="eager"
            alt="logo"
            src={logoOfficial}
          />
      <h1>Welcome to Image Chef Studios</h1>
      <p>Welcome to The Image Chef Studios, where every moment is a masterpiece waiting to be captured. Our passion for photography goes beyond the lens – it's about storytelling, creativity, and preserving memories that last a lifetime. Whether you're celebrating a milestone, capturing the essence of your brand, or simply cherishing the beauty of everyday life, our team of skilled photographers is here to transform your vision into stunning imagery. From weddings to corporate events, family portraits to professional headshots, we specialize in crafting captivating visuals that evoke emotion and inspire wonder. Step into our world of creativity, where each frame tells a unique story. Let us be your guides on this visual journey, and together, let's create moments that truly shine.</p>
      <img
            className="homeimage1"
            loading="eager"
            alt="homeimage"
            src={homepage}
          />
    </div>
    
  );
}

export default Homepage;
