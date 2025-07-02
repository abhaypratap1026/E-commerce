import React, { useContext, useState ,useRef} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png' 

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');
         
    }
 
    return (
        
        <div className='navbar flex flex-col  justify-center items-center p-4 shadow-[0_1px_3px_-2px_black] sm:flex-row  md:w-auto sm:gap-[0] xl:py-[12px] xl:px-[50px] lg:py-[12px] lg:px-[30px] md:py-[10px]'>
            <div className='nav-logo sm:scale-[0.8] flex items-center gap-[10px]'>
                <img className=' xl:w-[40px]' src={logo} alt='' />
                <p className='text-[#171717] text-[38px] font-semibold xl:text-[25px]'>SHOPPER</p>
            </div>
              <img className='nav-dropdown md:hidden  md:w-[0px] rotate-[-90deg] md:transition-[0.5s]' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu hidden sm:h-[70px] sm:top-[50px] md:flex  mt-[29px] xl:mt-3 items-center list-none gap-[50px] text-[#626262] text-[20px] font-medium xl:gap-[30px] xl:text-[16px] lg:gap-[25px] lg:text-[14px]  h-[80px] w-[100%] absolute bg-white justify-center top-[50px]  '>

                <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => { setMenu("shop") }}>
                    <Link to='/'>Shop</Link> {menu === "shop" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : <></>} </li>

                <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => { setMenu("mens") }}>
                    <Link to='/mens'>Men</Link> {menu === "mens" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : <></>}</li>

                <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => { setMenu("womens") }}>
                    <Link to='/womens'>Women</Link> {menu === "womens" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : <></>}</li>

                <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => { setMenu("kids") }}>
                    <Link to='/kids'> Kid</Link> {menu === "kids" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : <></>}</li>
            </ul>

            <div className='nav-login-cart sm:scale-[0.8] flex items-center gap-[45px] xl:gap-[30px] '>
              <Link to='/login'><button className='w-[157px] h-[58px] outline-none border-[1px] border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3] xl:w-[120px] xl:h-[45px] xl:text-[16px] lg:w-[80px] lg:h-[35px] lg:text-[14px]'>Login</button></Link> 
               <Link to='/cart'><img className='lg:w-[30px]' src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count w-[22px] h-[22px] flex justify-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] bg-red-600 text-white lg:w-[18px] lg:h-[18px  ] '>{getTotalCartItems ()}</div>
            </div>
        </div>
    );
};

export default Navbar