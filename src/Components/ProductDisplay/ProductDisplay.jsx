import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Left Section - Images */}
      <div className="productdisplay-left flex flex-col sm:flex-row lg:flex-col gap-4 items-center lg:items-start">
        {/* Thumbnail list */}
        <div className="productdisplay-img-list flex sm:flex-col gap-2 sm:gap-3">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              className="h-20 sm:h-16 md:h-20 lg:h-24 object-contain cursor-pointer"
              src={product.image}
              alt="product thumbnail"
            />
          ))}
        </div>
        {/* Main image */}
        <div className="productdisplay-img">
          <img
            className="w-full max-w-md sm:max-w-xs md:max-w-sm lg:max-w-md object-contain"
            src={product.image}
            alt="product main"
          />
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="productdisplay-right flex flex-col gap-4 lg:gap-6">
        {/* Product Name */}
        <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
          {product.name}
        </h1>

        {/* Stars */}
        <div className="flex items-center gap-2 text-gray-800 text-sm">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              className="w-4 sm:w-5"
              src={star_icon}
              alt="star"
            />
          ))}
          <img className="w-4 sm:w-5" src={star_dull_icon} alt="star dull" />
          <p>(122)</p>
        </div>

        {/* Prices */}
        <div className="flex items-center gap-4 text-lg sm:text-xl font-semibold">
          <span className="line-through text-gray-500">
            ${product.old_price}
          </span>
          <span className="text-red-500">${product.new_price}</span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          A lightweight, usually knitted, pullover shirt, close-fitting and a
          round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </p>

        {/* Size Selector */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Select Size
          </h2>
          <div className="flex flex-wrap gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="py-2 px-4 bg-gray-50 border border-gray-300 rounded cursor-pointer text-sm sm:text-base hover:bg-gray-100"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product.id)}
          className="w-40 sm:w-44 py-3 text-sm sm:text-base font-semibold text-white bg-red-500 hover:bg-red-600 rounded shadow-md transition"
        >
          ADD TO CART
        </button>

        {/* Category & Tags */}
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold">Category: </span>Women, T-shirt, Crop
          Top
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold">Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
