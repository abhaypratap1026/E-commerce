import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item'
import'./ShopCategory.css'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner block m-[30px_auto] w-[82%] xl:my-[20px] xl:mx-auto xl:w-[90%] md:w-[95%]' src={props.banner} alt="" /> 
      <div className="shopcategory-indexSort flex mx-20 md:mx-20 text-[12px] sm:mx-[84px] xl:m-auto xl:w-[90%] justify-between items-center">
        <p className='xl:text-[12px]'>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort py-[2px] px-[10px] sm:py-[2px] sm:px-[20px] xl:text-[12px] rounded-[40px] border-[1px] border-solid border-[#888] ">Sort by <img src={dropdown_icon} alt="" /></div>
      </div>
      <div className="shopcategory-products my-[20px] mx-[90px] flex flex-col items-center sm:grid grid-cols-2  md:grid md:grid-cols-4 xl:w-[90%] xl:my-[10px] xl:mx-auto xl:gap-y-[40px] gap-y-[80px] md:w-[75%]  ">
        {all_product.map((item ,i)=>{

          if(props.category===item.category){
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }

          else {
            return null
          }

        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center m-[150px_auto] w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium xl:my-[100px] xl:mx-auto xl:w-[200px] xl:h-[60px] xl:text-[16px] md:my-[60px] md:mx-auto md:w-[150px] md:h-[40px] md:text-[13px]">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory