import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item w-full max-w-[280px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <Link
        to={`/product/${id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          className="w-full rounded-md object-cover"
          src={image}
          alt={name}
        />
      </Link>

      {/* Name */}
      <p className="my-2 text-sm sm:text-xs md:text-sm font-medium text-gray-800 truncate">
        {name}
      </p>

      {/* Prices */}
      <div className="item-prices flex gap-2 items-center">
        <div className="item-prices-new text-gray-800 text-base sm:text-sm font-semibold">
          ${new_price}
        </div>
        <div className="item-price-old text-gray-500 text-sm sm:text-xs line-through">
          ${old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
