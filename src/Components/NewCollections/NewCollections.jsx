import React from 'react'
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections flex flex-col items-center gap-[10px] mb-[100px] md:gap-[6px]'>
        <h1 className='text-[#171717] text-[50px] font-semibold xl:text-[40px] lg:text-[30px] md:text-[20px]'>NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] xl:w-[160px] xl:h-[4px] lg:w-[120px] lg:h-[3px] md:w-[100px]' />
        <div className='collections md:grid md:grid-cols-4 mt-[50px] gap-[30px] xl:gap-[20px] xl:mt-[30px] lg:mt-[20px] md:gap-[5px] sm:grid sm:grid-cols-2 sm:gap-[20px]'>
            {new_collection.map((item,i)=>{
                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
  
export default NewCollections  