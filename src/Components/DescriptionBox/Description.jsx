import React from 'react'

const Description = () => {
    return (
        <div className='descriptionbox my-[120px] mx-[170px]'>
            <div className='descriptionbox-navigator flex'>
                <div className="descriptionbox-nav-box flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0]">Description</div>
                <div className="descriptionbox-nav-box fade flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0]  bg-[#FBFBFB] text-[#555]">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description flex flex-col gap-[25px] border-[1px] border-solid border-[#D0D0D0] p-[48px] pb-[70px]">
                <p>An eCommerce website is an online platform that allows businesses to showcase and
                    sell their products or services over the internet. It provides features
                    like product listings, shopping carts, secure payment gateways, and
                    user accounts to facilitate a smooth buying experience.
                    Customers can browse categories, view product details, and
                    place orders from anywhere, anytime. </p>
                <p>
                eCommerce websites are essential for modern retail, enabling businesses
                to reach a wider audience beyond physical stores. They often include admin dashboards
                , order tracking, inventory management, and promotional tools.</p>
            </div>
        </div>
    )
}

export default Description