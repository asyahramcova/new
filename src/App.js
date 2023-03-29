import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} 
from "react-router-dom";
import Home from './Home';
import About from './About';
import Shop from './Shop';
import './App.css';
import Reviews from "./Reviews";

function App(){
  return <Router>
    <nav >
      <Link to="/"  className='link'>Home</Link>
      <Link to ="/shop" className="link"  >Shop</Link>
      <Link to ="/reviews" className="link"  >Reviews</Link>
      <Link to="/about" className='link' >About Us</Link>
    </nav>
    <Routes> 
      <Route path='/'  element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/reviews' element={<Reviews/>} />
      <Route path='/about' element={<About/>} />
      
    </Routes>
    </Router>
}
export default App;