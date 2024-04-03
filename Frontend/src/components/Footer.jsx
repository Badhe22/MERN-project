// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Policy from "../pages/Policy";


{/*const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-black text-Black py-6 px-6 bg-fixed">
      <h1 className="text-center text-2xl">Copyright &copy; hero</h1>
      <p className="text-center mt-3">
        <Link to="/about" className=" hover:text-blue-500">About</Link> |
        <Link to="/contact" className=" hover:text-blue-500">Contact</Link> |
        <Link to="/policy" className=" hover:text-blue-500">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;*/}



function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="mt-2">123 Business Street, City, Country</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="mt-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-600 my-4" />
        <div className="text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
