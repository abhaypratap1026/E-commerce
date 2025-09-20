import React from 'react'
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer flex flex-col justify-center items-center gap-[40px] sm:gap-[20px] px-4 sm:px-2'>
            
            {/* Logo */}
            <div className='footer-logo flex items-center gap-[20px] md:gap-[10px]'>
                <img className='w-[60px] md:w-[40px]' src={footer_logo} alt="Logo" />
                <p className='text-[#383838] text-[46px] md:text-[25px] font-bold'>SHOPPER</p>
            </div>

            {/* Links */}
            <ul className="footer-links flex flex-wrap justify-center list-none gap-[30px] sm:gap-[15px] text-[#252525] text-[20px] md:text-[14px]">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            {/* Social Icons */}
            <div className="footer-social-icon flex gap-[20px] sm:gap-[10px]">
                <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] rounded-md">
                    <img className='w-[28px] md:w-[22px]' src={instagram_icon} alt="Instagram" />
                </div>
                <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] rounded-md">
                    <img className='w-[28px] md:w-[22px]' src={pintester_icon} alt="Pinterest" />
                </div>
                <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] rounded-md">
                    <img className='w-[28px] md:w-[22px]' src={whatsapp_icon} alt="WhatsApp" />
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright flex flex-col items-center gap-[20px] w-full mb-[20px] text-[#1a1a1a] text-[16px] md:text-[13px]">
                <hr className='w-[80%] border-none rounded-[10px] h-[2px] bg-[#c7c7c7]'/>
                <p className='text-center px-2'>Copyright © 2025 - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
