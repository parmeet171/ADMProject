import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TbStatusChange } from "react-icons/tb";
import { MdOutlineInfo } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
const SideBar = () => {
  const location = useLocation();
  return (
    <div
      className="flex flex-col w-64 fixed min-h-[90vh] bg-blue-500 shadow-lg 
      z-50 py-6 "
    >
      <ul className="text-white text-lg">
        <Link
          to="/student"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] ${
            location.pathname === "/student" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          <FaHome  className='text-2xl' />
          Home
        </Link>
        <Link
          to="/student/application"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] ${
            location.pathname === "/student/application" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          <GrDocumentText className='text-2xl' />
          Application
        </Link>
        <Link
          to="/student/application-status"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] ${
            location.pathname === "/student/application-status" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          {/* <TbStatusChange /> */}
          <MdOutlineInfo className='text-2xl' />
          Application Status
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
