import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems my-[50px] mx-[20px] md:my-[100px] md:mx-[170px]'>
            {/* Header */}
            <div className='cartitems-format-main hidden sm:grid grid-cols-6 text-[14px] md:text-[16px] font-semibold'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-[2px] bg-[#e2e2e2] border-0 my-2 hidden sm:block' />

            {/* Items */}
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className="cartitems-row">
                            <div className='cartitems-format flex flex-col sm:grid sm:grid-cols-6 items-center gap-4 text-[14px] md:text-[16px] py-4'>
                                <img src={e.image} alt="" className='carticon-product-icon h-[62px] w-[62px] object-cover' />
                                <p className='text-center sm:text-left'>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity w-[64px] h-[40px] md:h-[50px] border-[2px] border-solid border-[#ebebeb] bg-[#fff]'>
                                    {cartItems[e.id]}
                                </button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    className='cartitems-remove-icon w-[15px] cursor-pointer'
                                    src={remove_icon}
                                    onClick={() => { removeFromCart(e.id) }}
                                    alt="remove"
                                />
                            </div>
                            <hr className='sm:block hidden' />
                        </div>
                    );
                }
                return null;
            })}

            {/* Bottom Section */}
            <div className="cartitems-down flex flex-col lg:flex-row my-[50px] md:my-[100px] gap-10">
                {/* Total */}
                <div className="cartitems-total flex-1 flex flex-col gap-[20px] md:gap-[40px]">
                    <h1 className='text-lg md:text-xl font-bold'>Cart Total</h1>
                    <div className="space-y-2">
                        <div className='cartitems-total-item flex justify-between py-[10px]'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item flex justify-between py-[10px]">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item flex justify-between py-[10px] font-semibold">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='w-full md:w-[262px] h-[50px] md:h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[14px] md:text-[16px] font-semibold cursor-pointer'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default CartItems
