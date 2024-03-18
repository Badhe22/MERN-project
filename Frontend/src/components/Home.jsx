import React from "react";

function Home(){
    return(
        <div className="relative">
            <img
              src="./Images/homepages.jpg"
              className="w-full h-90 "
              alt="Homepage image"
            />
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col items-start text-4xl p-5 text-left text-black">
                <div>
                    <h1 className="mt-5 font-serif text-6xl">Welcome to Ecommerce Store,</h1>
                    <p className="mt-5 text-2xl">Discover the best offers on a wide range of products</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
