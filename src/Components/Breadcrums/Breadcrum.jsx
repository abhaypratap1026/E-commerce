import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const {product} = props;
  
  return (
    <div className='breadcrum flex items-center  gap-[8px] text-[#5e5e5e] text-[12px] font-semibold my-[60px]  capitalize xl:my-[30px] xl:mx-[50px] xl:text-[14px] lg:my-[30px] lg:mx-[30px] lg:text-[13px] md:my-[30px] md:mx-[10px] md:text-[12px] sm:text-[12px] sm:mx-[10px]'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum 