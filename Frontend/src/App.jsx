import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy"; 
import Blog from "./components/Blog";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import './index.css';

const App = () => {
  return (
    
    <BrowserRouter> {/* Use BrowserRouter here */}
      <div className="app">
        {/* Include the Navbar component */}
        <Navbar />

        {/* Define routes for existing pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Include routes for new pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        
        {/* Include the Footer component */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
