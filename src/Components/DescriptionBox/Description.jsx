import React from "react";

const Description = () => {
  return (
    <div className="descriptionbox my-20 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Tabs */}
      <div className="descriptionbox-navigator flex flex-col sm:flex-row">
        <div className="descriptionbox-nav-box flex-1 flex items-center justify-center text-base font-semibold h-14 border border-gray-300">
          Description
        </div>
      </div>

      {/* Content */}
      <div className="descriptionbox-description flex flex-col gap-6 border border-gray-300 p-6 sm:p-10 text-sm sm:text-base leading-relaxed bg-white">
        <p>
          An eCommerce website is an online platform that allows businesses to
          showcase and sell their products or services over the internet. It
          provides features like product listings, shopping carts, secure
          payment gateways, and user accounts to facilitate a smooth buying
          experience. Customers can browse categories, view product details, and
          place orders from anywhere, anytime.
        </p>
        <p>
          eCommerce websites are essential for modern retail, enabling
          businesses to reach a wider audience beyond physical stores. They
          often include admin dashboards, order tracking, inventory management,
          and promotional tools.
        </p>
      </div>
    </div>
  );
};

export default Description;
