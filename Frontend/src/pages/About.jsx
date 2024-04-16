import React from "react";

const About = () => {
  return (
    <div title={"About us - B2B Web Portal"} className="flex">
      <div className="w-1/2">
        <img
          className="w-full h-auto"
          src="./Images/about.jpeg"
          alt="About us"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mt-2 mb-4">About Our B2B Web Portal</h2>
        <p className="text-justify text-lg">
          At [Your Company Name], we are dedicated to providing innovative solutions tailored to the needs of businesses. With a focus on [describe your industry or specialization], we strive to empower B2B clients to [mention key benefits or outcomes]. Our team is committed to delivering exceptional service and value to our business partners, helping them achieve their goals and drive success.
        </p>
        <p className="text-lg mt-4">
          Interested in learning more about how we can support your business? <a href="/contact" className="text-blue-500 hover:underline">Get in touch</a> with us today.
        </p>
      </div>
    </div>
  );
};

export default About;
