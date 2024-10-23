import React from "react";
import { Link } from "react-router-dom";
import { TbBooks } from "react-icons/tb";
import { FiAlignLeft } from "react-icons/fi";
import LogSiNavbar from "./LogSiNavbar";

const Navbar = () => {
  //   return (
  //     <div className='h-[10vh] bg-[#0051ff]'>
  //       Navbar
  //     </div>
  //   )

  return (
    <div className="sticky top-0 h-[10vh] bg-[#0051ff] flex items-center justify-between z-50 px-20">
      <div className="flex items-center ">
        {/* sidebar button  */}
        {/* <div className="p-2 rounded-full mx-5 text-white hover:bg-[#ffffff28]">
          <FiAlignLeft className="text-3xl" />
        </div> */}
        
        <Link to={"/"}>
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <TbBooks color="#fff" fontSize="2rem" />
            {/* Title */}
            <span className="text-white text-lg font-semibold">
              College Admission
            </span>
          </div>
        </Link>
      </div>

      <LogSiNavbar />
    </div>
  );
};

export default Navbar;
