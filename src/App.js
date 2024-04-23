import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
// import { carousel } from './Components/carousel';
// import carousel from './Components/carousel';

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


