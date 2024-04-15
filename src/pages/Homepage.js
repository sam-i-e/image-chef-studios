import React from 'react';
import '../styles/Homepage.css';
// import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";
import logoOfficial from "../Assets/logoOfficial.png"
// import cart from "../Assets/cart.png"
// import homepage from "../Assets/homepage.jpg"
// import homepage2 from "../Assets/homepage2.jpg"
import homepage11 from "../Assets/homepage11.jpg"
// import homepage6 from "../Assets/homepage6.jpg"
import Image from "../Assets/DJI_0600.jpg"
import homepage12 from "../Assets/homepage12.png"
import homepage13 from "../Assets/homepage13.png"
import ImageSlider from "./ImageSlider";
// import carousel from '../Components/carousel';
// import { carousel } from './Components/carousel.jsx';




function Homepage() {
  const slides = [
    {url: 'http://localhost:3001/image-1.jpg', title: 'Slide 1'},
    {url: 'http://localhost:3000/image-2.jpg', title: 'Slide 2'},
    {url: 'http://localhost:3000/image-3.jpg', title: 'Slide 3'},
    {url: 'http://localhost:3000/image-4.jpg', title: 'Slide 4'},
    {url: 'http://localhost:3000/image-5.jpg', title: 'Slide 5'},
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="homepage">
       <img
            className="logo1"
            loading="eager"
            alt="logo"
            src={logoOfficial}
          />
      <div className="hero" style={{backgroundImage: `url(${Image})`}}>
      <div className='hero-cont'>
      {/* <h2>Do you ever stop and think about how bad you're going to miss a moment you're living long after it's gone?<br></br> Worry no more. */}
{/* We capture memories so you can re-live them over and over again!</h2> */}
      <h2>Where every snapshot tells a story <br></br>and every frame<br></br> captures a moment of pure magic.</h2>
      {/* <img
            className="homeimage6"
            loading="eager"
            alt="homeimage"
            src={homepage6}
          /> */}
      {/* <h3>Welcome to The Image Chef Studios,<br></br> where every moment is a masterpiece waiting to be captured.<br></br> Our passion for photography goes beyond the lens – it's about storytelling, creativity and preserving memories that last a lifetime.</h3> */}
      </div>
      </div>
      <div className="slides">
        <h1>Hello People</h1>
        <div style={containerStyles}>
        <ImageSlider slides={slides}/>
        </div>
      </div>
      <div className='illustration-container'>
      <img
            className="homepage12"
            loading="eager"
            alt="logo"
            src={homepage12}
          />
        <div className='card'>
          <h1>Journey Through the Lens</h1>
          <p>We capture the essence of life's most precious moments. From weddings to family portraits, corporate events to breathtaking landscapes,</p>
        </div>

        </div>
      <section className="prompt">
        <div className="card">
          <h1>Our passion for photography goes beyond mere snapshots; it's about crafting timeless stories through the lens.</h1>
          <p>Whether you're celebrating a milestone, capturing the essence of your brand, or simply cherishing the beauty of everyday life,<br></br> our team of skilled photographers is here to transform your vision into stunning imagery </p>
          <img
            className="homeimage11"
            loading="eager"
            alt="homeimage"
            src={homepage11}
          />
          <div className="get-started-button1">
          <button>Book With Us</button>
          {/* <Button variant="contained" color="primary">
        Click Me
      </Button> */}
          {/* <a href="/saver" className="saver-schedule-demo-button"> Book With us</a> */}
              </div>
              
          <div className="navigate">
            <div className="get-started-button1">
             </div>
             
              
            {/* <a href="/saver" className="saver-schedule-demo-button"> Plan a future</a> */}
          </div>
        </div>
        
      </section>
      <div className='illustration-container2'>
      <img
            className="homepage13"
            loading="eager"
            alt="logo"
            src={homepage13}
          />
        <div className='card'>
          <h1>See the World Through our Eyes</h1>
          <p>Explore our portfolio and let us transform your moments into works of art that you'll cherish for a lifetime.</p>
        </div>
        <div className="topcontent">
          <h2>Our portfolio</h2>
          <p>We have a wide range of photography styles and specialize in capturing the essence of everyday life.</p>
        </div>
        {/* Carousel */}
        <carousel />
        </div>
    </div>
    
  );
}

export default Homepage;
