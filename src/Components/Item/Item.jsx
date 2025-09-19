import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {

    return (
        <div className=' item w-[280px] hover:scale-105 transition duration-600 xl:w-[220px] xl:text-[14px] lg:w-[170px] lg:text-[13px] md:w-[120px] md:text-[12px] sm:w-[80px] sm:text-[10px]'>
            <Link to={`/product/${props.id}`}><img className=' w-[280px] xl:w-[220px] lg:w-[170px] md:w-[120px] sm:w-[160px] sm:gap-2 ' onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>    
            <p className='my-[6px]'>{props.name}</p>
            <div className="item-prices flex gap-[10px] ">
                <div className="item-prices-new text-[#374152] text-[18px] font-semibold">
                    ${props.new_price}
                </div>
                <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through xl:text-[14px] lg:text-[13px] md:text-[12px]">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item