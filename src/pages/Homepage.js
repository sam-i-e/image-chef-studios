import React from 'react';
import '../styles/Homepage.css';
import { Link } from "react-router-dom";
import logoOfficial from "../Assets/logoOfficial.png"
import cart from "../Assets/cart.png"
import homepage from "../Assets/homepage.jpg"




function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to Image Chef Studios</h1>
      <p>Sonnie Muthoni</p>
    {/* <div class="header">
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <Link to=""><img src={logoOfficial.png} alt="logo" width="350px"></img></Link>
            </div>
            <nav>
               <ul>
                <li><a href="/Homepage">Home</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/Bookings">Bookings</a></li>
                <li><a href="/About">About us</a></li>
                <li><a href="/About">Contact us</a></li>
               </ul>
            </nav>
            <Link to=""><img src={cart.png} alt="cart" width="30px" height="30px"></img></Link>
        </div>
        <div class="row">
            <div class="col-2">
                <h1>Let's capture your memories!</h1>
                <p>Do you ever stop and think about how bad you're going to miss a moment you're living long after it's gone? Worry no more.
                    <br></br>We capture memories so you can re-live them over and over again!</p>
                    <div class="landing">
                        <a href="#sliding" class="btn">Dive right in &#8594;</a>
                    </div>
            </div>
            <div class="col-2">
               <Link to=""><img src={homepage.jpg} alt="homepage" width="600px"></img> </Link>
            </div>
        </div>
    </div>
    </div> */}
    </div>
    
  );
}

export default Homepage;
