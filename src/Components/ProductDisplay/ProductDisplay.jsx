import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay flex mx-[170px] xl:my-0 xl:mx-[60px] lg:my-0 lg:mx-[30px] md:my-[0px] md:mx-[10px] sm:flex-col md:flex-row '>
            <div className='productdiplay-left flex gap-[17px] xl:gap-[10px] lg:gap-[5px] md:gap-[10px] md:flex-col-reverse md:items-center lg:flex-row lg:items-start sm:flex-row sm:m-auto sm:gap-[10px] '>
                <div className='productdisplay-img-list flex lg:flex-col md:flex-row md:gap-[6px] gap-[16px] xl:gap-[10px] sm:flex-col sm:gap-[8px] '>
                    <img className='h-[163px] xl:h-[120px] md:h-[70px] lg:h-[107px] sm:h-[60px]' src={product.image} alt="" />
                    <img className='h-[163px] xl:h-[120px] md:h-[70px] lg:h-[107px] sm:h-[60px]' src={product.image} alt="" />
                    <img className='h-[163px] xl:h-[120px] md:h-[70px] lg:h-[107px] sm:h-[60px]' src={product.image} alt="" />
                    <img className='h-[163px] xl:h-[120px] md:h-[70px] lg:h-[107px] sm:h-[60px]' src={product.image} alt="" />
                    <img className='h-[163px] xl:h-[120px] md:h-[70px] lg:h-[107px] sm:h-[60px]' src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdiplay-main-img w-[586px] h-[700px] xl:w-auto xl:h-[639px] lg:h-[558px] md:h-[300px] md:w-[356px] sm:h-[330px] ' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right mx-[70px] flex flex-col xl:my-[0px] xl:mx-[30px] md:my-[0px] md:mx-[20px] sm:m-[5px] ">
                <h1 className='text-[#3d3d3d] text-[40px] font-bold xl:text-[22px] lg:text-[18px] md:text-[14px] sm:mt-[15px] sm:text-[20px] sm:font-medium'>{product.name}</h1>
                <div className='productdisplay-right-star flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px] xl:gap-[3px] xl:text-[13px]  '>
                    <img className='lg:w-[15px] md:w-[13px] sm:w-[15px] ' src={star_icon} alt="" />
                    <img className='lg:w-[15px] md:w-[13px] sm:w-[15px] ' src={star_icon} alt="" />
                    <img className='lg:w-[15px] md:w-[13px] sm:w-[15px] ' src={star_icon} alt="" />
                    <img className='lg:w-[15px] md:w-[13px] sm:w-[15px] ' src={star_icon} alt="" />
                    <img className='lg:w-[15px] md:w-[13px] sm:w-[15px] ' src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices flex my-[4px] gap-[30px] text-[24px] font-bold xl:my-[10px] xl:mx-0 xl:text-[18px]">
                    <div className="productdisplay-right-price-old text-[#818181] line-through">${product.old_price}</div>
                    <div className="productdisplay-right-price-new text-[#ff4141]">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description xl:text-[13px] lg:text-[12px] md:text-[12px] ">
                    A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline 
                    and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className='productdisplay-right-size'>
                    <h1 className='mt-[55px] text-[#656565] text-[20px] font-semibold xl:mt-[20px] xl:text-[20px] md:mt-[10px]  '>Select Size</h1>
                    <div className="productdisplay-right-sizes flex my-30px gap-[20px] lg:mt-[10px] md:mt-[10px] md:gap-[5px] sm:gap-[10px] sm:my-[20px] ">
                        <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer xl:py-[14px] xl:px-[20px] lg:py-[10px] lg:px-[16px] lg:text-[12px] md:py-[4px] md:px-[11px] sm:py-[10px] sm:px-[16px] sm:text-[14px]'>S</div>
                        <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer xl:py-[14px] xl:px-[20px] lg:py-[10px] lg:px-[16px] lg:text-[12px] md:py-[4px] md:px-[11px] sm:py-[10px] sm:px-[16px] sm:text-[14px]'>M</div>
                        <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer xl:py-[14px] xl:px-[20px] lg:py-[10px] lg:px-[16px] lg:text-[12px] md:py-[4px] md:px-[11px] sm:py-[10px] sm:px-[16px] sm:text-[14px]'>L</div>
                        <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer xl:py-[14px] xl:px-[20px] lg:py-[10px] lg:px-[16px] lg:text-[12px] md:py-[4px] md:px-[11px] sm:py-[10px] sm:px-[16px] sm:text-[14px]'>XL</div>
                        <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer xl:py-[14px] xl:px-[20px] lg:py-[10px] lg:px-[16px] lg:text-[12px] md:py-[4px] md:px-[11px] sm:py-[10px] sm:px-[16px] sm:text-[14px]'>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} className='py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#FF4141] mt-[20px] mb-[40px] border-none outline-none cursor-pointer xl:w-[150px] xl:py-[15px] xl:px-0 xl:mb-[20px] lg:w-[120px] lg:py-[10px] lg:px-0 lg:mb-[10px] lg:text-[14px] md:w-[120px] md:text-[12px] md:py-[10px] md:px-[0px] sm:w-[130px] sm:text-[15px] sm:py-[12px] sm:px-[0px]'>ADD TO CART</button>
                <p className='productdisplay-right-catergory mt-[10px] xl:mt-[5px] xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[16px] '><span className='font-semibold'>Category :</span><span>Women , T-shirt, Crop Top</span></p>
                <p className='productdisplay-right-catergory mt-[10px] xl:mt-[5px] xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[16px] '><span className='font-semibold'>Tags :</span><span>Modern, Latest</span></p>
            </div>
        </div>
    )
}

export default ProductDisplay