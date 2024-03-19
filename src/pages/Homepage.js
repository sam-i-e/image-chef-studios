import React from 'react';
import '../styles/Homepage.css';
// import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";
import logoOfficial from "../Assets/logoOfficial.png"
// import cart from "../Assets/cart.png"
// import homepage from "../Assets/homepage.jpg"
// import homepage2 from "../Assets/homepage2.jpg"
import homepage5 from "../Assets/homepage5.jpg"
import homepage6 from "../Assets/homepage6.jpg"
import Image from "../Assets/DJI_0896_2.jpg"




function Homepage() {
  return (
    <div className="homepage">
      <div className="hero" style={{backgroundImage: `url(${Image})`}}>
      <img
            className="logo1"
            loading="eager"
            alt="logo"
            src={logoOfficial}
          />
      <h1>The<br></br> Image Chef Studios</h1>
      <h2>Where every snapshot tells a story <br></br>and every frame<br></br> captures a moment of pure magic.</h2>
      {/* <img
            className="homeimage6"
            loading="eager"
            alt="homeimage"
            src={homepage6}
          /> */}
      <h3>Welcome to The Image Chef Studios,<br></br> where every moment is a masterpiece waiting to be captured.<br></br> Our passion for photography goes beyond the lens – it's about storytelling, creativity and preserving memories that last a lifetime.</h3>
      </div>
      <section className="prompt">
        <div className="card">
          <h1>Our passion for photography transcends mere snapshots; it's about crafting timeless stories through the lens.</h1>
          <p>Whether you're celebrating a milestone, capturing the essence of your brand, or simply cherishing the beauty of everyday life,<br></br> our team of skilled photographers is here to transform your vision into stunning imagery </p>
          <img
            className="homeimage5"
            loading="eager"
            alt="homeimage"
            src={homepage5}
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
    </div>
    
  );
}

export default Homepage;
