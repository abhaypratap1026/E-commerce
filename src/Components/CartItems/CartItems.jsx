import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'
const CartItems = () => {
    const {getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartitems my-[100px] mx-[170px]'>
            <div className='cartitems-format-main '>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-[3px] bg-[#e2e2e2] border-0' />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return( <div key={e.id}>
                        <div className='cartitems-format'>
                            <img src={e.image} alt="" className='carticon-product-icon h-[62px]' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity w-[64px] h-[50px] border-[2px] border-solid border-[#ebebeb] bg-[#fff]'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon w-[15px] mx-[40px] cursor-pointer' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                    );
                };
                return null;
            })}
            <div className="cartitems-down flex my-[100px]">
                <div className="cartitems-total flex-1 flex flex-col mr-[200px] gap-[40px]">
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitems-total-item flex justify-between py-[15px]'>
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item flex justify-between py-[15px]">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item flex justify-between py-[15px]">  
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
                </div>

                <div className="cartitems-promocode flex-1 text-[16px] font-medium">
                    <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox flex w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] ">
                        <input className='border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]' type="text" placeholder='Promo Code' />
                        <button className='w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer' >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems 