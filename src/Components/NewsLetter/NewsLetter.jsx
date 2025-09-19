import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[150px] bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] gap-[30px] xl:px-[80px] xl:py-[0px] xl:mb-[120px] xl:gap-[20px] lg:mb-[60px] md:mb-[30px] md:h-[35vh] sm:h-[25vh] sm:w-[65%] sm:p-0 sm:gap-[15px] '>
        <h1 className='text-[#454545] text-[55px] font-semibold xl:text-[36px] lg:text-[30px] md:text-[18px] sm:text-[16px]'>Get Exclusive Offers On Your Email</h1>
        <p className='text-[#454545] text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[13px] sm:max-w-[200px] sm:text-center'>Subscribe to our newsletter and stay updated</p>
        <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-[1px] border-solid border-[#e3e3e3] xl:w-[600px] xl:h-[60px] lg:w-[500px] lg:h-[50px] md:w-[400px] md:h-[40px] sm:w-[290px]'>
            <input className='w-[500px] ml-[30px] border-none outline-none text-[#616161] font-poppins text-[16px] xl:w-[400px] lg:w-[300px] lg:text-[14px] md:w-[200px] md:text-[13px] sm:w-[130px]' type="email" placeholder='Your Email id' />
            <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer xl:w-[160px] xl:h-[60px] lg:w-120px] lg:h-[50px] lg:text-[14px] md:w-[100px] md:h-[40px] md:text-[13px]'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter