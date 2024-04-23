import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
// import { carousel } from './Components/carousel';
// import carousel from './Components/carousel';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image paths here
];



function App() {
  return (
    
    <Router> 
      <Routes>
        <Route path="/" element={<Homepage/>} />
       
      </Routes>
    </Router>
    
  );
  
}

export default App;


