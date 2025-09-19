import React from 'react'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
const Hero = () => {
  return (
    <div className='hero h-[100vh] bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] flex flex-col items-center sm:flex-row  '>
        <div className="hero-left flex-1 flex flex-col justify-center  gap-[20px]  leading-[1.1] xl:pl-[100px] lg:pl-[80px] md:pl-[100px] sm:pl-[90px]">
            <h2 className='text-[#090909] text-[25px] font-semibold xl:text-[22px] lg:text-[20px] md:text-[16px] sm:text-[18px]'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon flex items-center gap-[20px] xl:w-[80px] lg:w-[65px] md:w-[50px] sm:w-[55px]'>
                    <p className='text-[#171717] text-[40px] font-bold xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[50px]'>new</p>
                    <img className='w-[50px] sm:w-[105px] ' src={hand_icon} alt="" />
                </div>
                <p className=' text-[#171717] text-[40px] font-bold xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[50px]'>collections</p>
                <p className='  text-[#171717] text-[40px] font-bold xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[50px] '>for everyone</p>
            </div>
            <div className="hero-latest-btn flex justify-center items-center  gap-[15px] w-[200px] h-[50px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[17px] font-medium xl:gap-[10px] xl:w-[250px] xl:h-[60px] xl:mt-[20px] xl:text-[18px] lg:w-[220px] lg:h-[50px] lg:text-[16px] md:w-[175px] md:h-[40px] md:text-[13px] sm:w-[200px] sm:h-[45px] sm:text-[14px] ">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right flex-1 flex items-center justify-center  ">
            <img className='xl:w-[500px] lg:w-[400px] md:w-[300px] w-[300px] ' src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero