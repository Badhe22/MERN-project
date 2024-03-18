import React from "react";

const Contact = () => {
  return (
    <div title={"Contact us"} className="flex">
      <div className="w-1/2 pr-4 mt-3">
        <img
          className="w-full h-auto"
          src="./Images/contactus.jpeg"
          alt="contactus"
        />
      </div>
      <div className="w-1/2">
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center text-2xl">CONTACT US</h1>
          <p className="text-justify mt-4">
            Any query and info about the product feel free to call anytime we're 24/7 available
          </p>
          <p className="mt-6">www.help@cursu.com</p>
          <p className="mt-2">012-3456789</p>
          <p className="mt-2">1800-0000-0000 (toll-free)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

