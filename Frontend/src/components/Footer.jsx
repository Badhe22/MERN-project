// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Policy from "../pages/Policy";


const Footer = () => {
  return (
    <div className ="footer" class="text-center mt-3 align-bottom flex items-center mx-auto bg-red-600 p-5" >
      <h1 className="text-center mt-3 p-5 flex place-content-center items-center mx-auto">Copyright &copy; Cursu</h1>
      <br></br>
      <p className="text-center mt-3 p-5 place-content-center flex items-center mx-auto">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
