import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts flex flex-col items-center gap-6 my-16 px-4 sm:px-6 md:px-10">
      {/* Title */}
      <h1 className="text-[#171717] text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
        Related Products
      </h1>

      {/* Divider */}
      <hr className="w-24 sm:w-40 h-1 sm:h-1.5 rounded-full bg-[#252525]" />

      {/* Items Grid */}
      <div className="relatedproducts-item grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 w-full max-w-6xl">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
