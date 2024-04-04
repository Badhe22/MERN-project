import React, { useState } from "react";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home({ categories }) {
  const [sliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  return (
    <div className="relative">
      <Slider {...sliderSettings}>
        <div>
          <img
            src="./Images/homepages.jpg"
            className="w-full h-90"
            alt="Slider Image 1"
          />
        </div>
        <div>
          <img
            src="./Images/Slider2.jpg"
            className="w-full h-90"
            alt="Slider Image 2"
          />
        </div>
        <div>
          <img
            src="./Images/Slider3.jpg"
            className="w-full h-90"
            alt="Slider Image 3"
          />
        </div>
      </Slider>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col items-start text-4xl p-5 text-left text-black z-10">
        <div>
          <h1 className="mt-5 font-serif text-6xl">
            Welcome to Ecommerce Store,
          </h1>
          <p className="mt-5 text-2xl">
            Discover the best offers on a wide range of products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
