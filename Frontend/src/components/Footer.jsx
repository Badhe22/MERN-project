// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Policy from "../pages/Policy";


const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-black text-Black py-6 px-6 bg-fixed">
      <h1 className="text-center text-2xl">Copyright &copy; hero</h1>
      <p className="text-center mt-3">
        <Link to="/about" className=" hover:text-blue-500">About</Link> |
        <Link to="/contact" className=" hover:text-blue-500">Contact</Link> |
        <Link to="/policy" className=" hover:text-blue-500">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
