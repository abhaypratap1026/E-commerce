import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup w-[100%] h-[90vh] bg-[#fce3fe] pt-[100px]'>
      <div className='loginsignup-container w-[580px] h-[600px] bg-white m-auto py-[40px] px-[60px]'>
        <h1 className='my-[20px]'>Login</h1>
        <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px]">
          <input className='input h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="text" placeholder='Your Name' />
          <input className='input h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="email" placeholder='Email Address' />
          <input className='input h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="password" placeholder='Password' />
        </div>
        <button className='w-[450px] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer'>Continue</button>
        <p className='loginsignup-login mt-[20px] text-[#5c5c5c] text-[18px] font-medium'>Already have an account? <span className='text-[#ff4141] font-semibold'>Login here</span></p>
        <div className="loginsignup-agree flex items-center mt-[5px] gap-[15px] text-[#5c5c5c] text-[18px] font-medium">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup