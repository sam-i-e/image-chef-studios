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
import homepage14 from "../Assets/homepage14.JPG"
import homepage15 from "../Assets/homepage15.jpg"
import homepage16 from "../Assets/homepage16.jpg"
import homepage17 from "../Assets/homepage17.JPG"
import homepage18 from "../Assets/homepage18.jpg"
import ImageSlider from "./ImageSlider";
import Testimonials from '../Components/Testimonials';
import carousel from '../Components/carousel';
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
      {/* <div>
                <section className="display-images">
                    <div className="image-1">
                    <Link to=""><img src={individual1} alt="individualimage" /></Link>
                    <h2>Tools for investing <br></br>and Saving</h2>
                    </div>
                    <div className="image-2">
                    <Link to=""><img src={individual2} alt="individualimage1" /></Link>
                    <h3>Expert insights, resources, and education</h3>
                    </div>
                    <div className="image-2">
                    <Link to=""><img src={individual3} alt="individualimage2" /></Link>
                    <h4>Individual Retirement Accounts (IRAs)</h4>
                    </div>
                </section>
            </div> */}
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
          <img
            className="homeimage14"
            loading="eager"
            alt="homeimage"
            src={homepage14}
          />
          <img
            className="homeimage15"
            loading="eager"
            alt="homeimage"
            src={homepage15}
          />
          <img
            className="homeimage16"
            loading="eager"
            alt="homeimage"
            src={homepage16}
          />
        </div>
        <div className='homepage15'>
        <img
            className="homeimage15"
            loading="eager"
            alt="homeimage"
            src={homepage15}
          />
          
        </div>
        {/* <div className='homepage16'>
        <img
            className="homeimage16"
            loading="eager"
            alt="homeimage"
            src={homepage16}
          />
        </div> */}
        <div className='homepage17'>
        <img
            className="homeimage17"
            loading="eager"
            alt="homeimage"
            src={homepage17}
          />
        </div>
        <div className='homepage18'>
        <img
            className="homeimage18"
            loading="eager"
            alt="homeimage"
            src={homepage18}
          />
        </div>
        
        {/* <div className="topcontent">
          <h2>Our portfolio</h2>
          <p>We have a wide range of photography styles and specialize in capturing the essence of everyday life.</p>
        </div> */}
        {/* Carousel */}
        <carousel />
        </div>
        <carousel />
        <Testimonials />
    </div>
    
  );
}

export default Homepage;
