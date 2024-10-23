import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";

const LogSiNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Login Button */}
      <div className="relative"  
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
        <button className=" text-white font-bold border  border-[#00e1ff] hover:border-[#00c9e4] flex justify-center items-center gap-2 px-4 py-2 rounded">
          Student <IoMdArrowDropdown className="mt-0.5" fontSize="1.2rem" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 text-lg  w-48 bg-white rounded shadow-lg">
            <ul className="py-2">
              <Link to="/student-login" className="px-4 py-2 hover:bg-gray-100 flex items-center  gap-2 cursor-pointer">
                <PiStudent /> Student Login
              </Link>
              <hr/>
              <Link to="/register" className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <RiAdminLine /> Student SignUp
              </Link>
            </ul>
          </div>
        )}
      </div>
      {/* Sign In Button */}
      <Link to={"/admin-login"}>
        <button
          className="text-white font-bold bg-[#00aeff] 
        hover:bg-[#00d9ff] border border-[#00aeff] hover:border-[#00d9ff] px-4 py-2 rounded"
        >
          Admin
        </button>
      </Link>
    </div>
  );
};

export default LogSiNavbar;
