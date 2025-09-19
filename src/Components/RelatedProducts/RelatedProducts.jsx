import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-[10px] h-[90vh] xl:h-[70vh] lg:h-[60vh] md:h-[50vh] md:gap-[6px]'>
        <h1 className='text-[#171717] text-[50px] mt-[-90px] sm:mt-0 font-semibold xl:text-[40px] lg:text-[30px] md:text-[20px]'>Related Products</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] xl:w-[160px] xl:h-[4px] lg:w-[120px] lg:h-[3px] md:w-[100px] ' />
        <div className="relatedproducts-item grid grid-cols-2  gap-[30px] sm:mt-[50px] sm:flex sm:gap-[20px] xl:gap-[20px] xl:mt-[30px] lg:gap-[15px] lg:mt-[20px] md:gap[5px]">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts