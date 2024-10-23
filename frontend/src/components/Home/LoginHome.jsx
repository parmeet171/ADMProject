import React from 'react'
import LandingPageImg from "../../assets/LandingPageImg.png";
import { Link } from "react-router-dom";
const LoginHome = () => {
  return (
    <div className='flex'>
      {/* left */}
      <div className=" w-3/5 flex flex-col justify-center items-end  pl-[12rem]">
        <p  className=" text-6xl font-bold text-right">
          College Admission
          Management System
        </p>
        {/* <p className="text-right mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam</p> */}

        <div className="mt-9">
          <Link to="/student-login"  className="mr-5 text-white font-bold bg-[#00aeff] hover:bg-[#00d9ff] border border-[#00aeff] 
          hover:border-[#00d9ff] px-4 py-2 rounded">Student</Link>
          <Link to="/admin-login" className=" text-[#1c99af] hover:text-[#35adc2] font-bold  border border-[#00aeff] 
          hover:border-[#00d9ff] px-4 py-2 rounded">Admin</Link>
        </div>
      </div>

      {/* right  */}
      <div className=" w-2/5">
        <img src={LandingPageImg} className="w-[33rem] h-[33rem]  " />
        {/* <img src={LandingPageImg} className="w-[20rem] h-[20rem] mt-[-1.5rem] ml-[-3rem] " /> */}
      </div>
    </div>
  )
}

export default LoginHome
