import React from "react";

const About = () => {
  return (
    <div title={"About us - Ecommerce app"} className="flex">
      <div className="w-1/2">
        <img
          className="w-full h-auto"
          src="./Images/about.jpeg"
          alt="About us"
        />
      </div>
      <div className="w-1/2">
        <p className="text-justify  text-2xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          officiis obcaecati esse tempore unde ratione, eveniet mollitia,
          perferendis eius temporibus dicta blanditiis doloremque explicabo
          quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
          accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
          commodi illum quidem neque tempora nam.
        </p>
      </div>
    </div>
  );
};

export default About;
