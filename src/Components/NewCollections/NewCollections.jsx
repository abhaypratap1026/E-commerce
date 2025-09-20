import React from 'react'
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections flex flex-col items-center gap-[10px] mb-[50px] sm:mb-[30px] md:mb-[60px] md:gap-[6px] px-4 sm:px-2  md:pt-[120px]'>
      
        {/* Heading */}
        <h1 className='text-[#171717] text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-semibold text-center'>
          NEW COLLECTIONS
        </h1>
        
        {/* Divider */}
        <hr className='w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px] h-[3px] md:h-[4px] lg:h-[6px] rounded-[10px] bg-[#252525]' />

        {/* Products Grid */}
        <div className='collections grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-[20px] sm:gap-[20px] md:gap-[30px] xl:gap-[20px] mt-[20px] sm:mt-[30px] md:mt-[40px]'>
            {new_collection.map((item, i) => (
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

export default NewCollections
