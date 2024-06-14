import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-between m-8">
      <div className="flex gap-6">
        <div className="flex flex-col gap-4">
          <img src={product.image} alt="" className="h-36" />
          <img src={product.image} alt="" className="h-36" />
          <img src={product.image} alt="" className="h-36" />
          <img src={product.image} alt="" className="h-36" />
        </div>
        <div>
          <img src={product.image} alt="" className="w-96 h-96" />
        </div>
      </div>
      <div className="ml-24">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <div className="flex items-center gap-2 mt-3">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p className="text-sm text-gray-700">(122)</p>
        </div>
        <div className="flex items-center gap-6 mt-8">
          <div className="text-lg font-bold line-through text-gray-600">Rs{product.old_price}</div>
          <div className="text-lg font-bold text-red-500">Rs{product.new_price}</div>
        </div>
        <div className="text-sm text-gray-700 mt-6">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="mt-8">
          <h1 className="text-lg font-semibold text-gray-600">Select Size</h1>
          <div className="flex gap-4 mt-4">
            <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">S</div>
            <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">M</div>
            <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">XL</div>
            <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">L</div>
            <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="mt-8 px-10 py-4 bg-red-500 text-white text-lg font-semibold rounded cursor-pointer"
        >
          ADD TO CART
        </button>
        <p className="mt-8 text-sm text-gray-700">
          <span className="font-semibold">Category :</span> Women , T-shirt, Crop Top
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Tags :</span> Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
