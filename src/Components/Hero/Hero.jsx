import React from 'react'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
const Hero = () => {
  return (
    <div className='hero h-[100vh] bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] flex'>
        <div className="hero-left flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1] ">
            <h2 className='text-[#090909] text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon flex items-center gap-[20px]'>
                    <p className='text-[#171717] text-[100px] font-bold'>new</p>
                    <img className='w-[105px]' src={hand_icon} alt="" />
                </div>
                <p className=' text-[#171717] text-[100px] font-bold'>collections</p>
                <p className='  text-[#171717] text-[100px] font-bold '>for everyone</p>
            </div>
            <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right flex-1 flex items-center justify-center">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero