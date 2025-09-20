import React from 'react'
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] mb-[100px] sm:mb-[60px] md:mb-[80px] px-4 sm:px-2'>
      
        {/* Heading */}
        <h1 className='text-[#171717] text-[20px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[40px] font-semibold text-center'>
            POPULAR IN WOMEN
        </h1>
        
        {/* Divider */}
        <hr className='w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px] h-[3px] md:h-[4px] lg:h-[6px] rounded-[10px] bg-[#252525]' />

        {/* Products Grid */}
        <div className="popular-item grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-[20px] sm:gap-[20px] md:gap-[30px] mt-[20px] sm:mt-[30px] md:mt-[40px] xl:mt-[50px]">
            {data_product.map((item,i)=>(
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
  )
}

export default Popular
