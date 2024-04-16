import React from "react";

const Contact = () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-4 mt-3">
        <img
          className="w-full h-auto"
          src="./Images/contact-us-image.jpg"
          alt="contactus"
        />
      </div>
      <div className="w-1/2">
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center text-2xl">Get in Touch</h1>
          <p className="text-justify mt-4">
            Have questions or need assistance with our services? Feel free to reach out to us anytime.
          </p>
          <p className="mt-6">Email: support@cursu.com</p>
          <p className="mt-2">Phone: 012-3456789</p>
          <p className="mt-2">Toll-Free: 1800-0000-0000</p>
          <p className="mt-2">Business Hours: Mon-Fri, 9am-5pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
