import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png';
const Offers = () => {
  return (
    <div className='offers w-[75%] sm:w-[65%] h-[60vh] mt-[36rem] sm:mt-0 flex m-auto  bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] xl:px-[80px] xl:py-[0px] xl:h-[60vh] xl:mb-[120px] lg:px-[60px] lg:py-[0px] lg:mb-[80px] lg:h-[40vh] md:px-[40px] md:h-[30vh] md:mb-[60px] sm:h-[25vh] sm:px-[40px] sm:mb-[60px] '>
        <div className='offers-left flex-1 flex flex-col justify-center items-center sm:items-start sm:text-left mb-10 sm:mb-0 '>
            <h1 className='text-[#171717] text-[40px]  font-semibold xl:text-[40px] lg:text-[30px] md:text-[22px] sm:text-[16px]'>Exclusive</h1>
            <h1 className='text-[#171717] text-[40px] font-semibold xl:text-[40px] lg:text-[30px] md:text-[22px] sm:text-[16px]'>Offers For You</h1>
            <p className='text-[#171717] text-[22px] font-semibold xl:text-[18px] md:text-[13px] sm:text-[10px]'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[170px] h-[50px]  rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer xl:w-[220px] xl:h-[50px] xl:text-[18px] lg:w-[160px] lg:h-[40px] lg:text-[16px] md:w-[140px] md:h-[30px] md:text-[12px] sm:w-[120px] sm:h-[25px] sm:text-[10px] sm:mt-[12px]'>Check Now</button>
        </div>
        <div className='offers-right sm:flex-1 flex items-center justify-end pt-[50px] xl:pt-[30px]'>
            <img className=' hidden sm:block xl:w-[300px] lg:w-[200px] md:w-[180px] sm:w-[160px]' src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers