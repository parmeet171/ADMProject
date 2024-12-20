import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaCheck, FaSearch } from "react-icons/fa";
import { FaRegSquareCaretDown } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const AdminSideBar = () => {
  const location = useLocation();
  
  return (
    <div
      className="flex flex-col w-64 fixed min-h-[90vh] bg-[#4c83fc] shadow-lg 
      z-50 py-6 "
    >
      <ul className="text-white text-lg">
        <Link
          to="/admin"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] ${
            location.pathname === "/student" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          <FaHome className='text-xl' />
          Dashboard
        </Link>
        <Link
          to="/admin/pending-applications"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] ${
            location.pathname === "/admin/pending-applications" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          <FaRegSquareCaretDown className='text-xl' />
          Pending Applications
        </Link>
        <Link
          to="/admin/selected-applications"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] text-nowrap ${
            location.pathname === "/admin/selected-applications" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          <FaCheck />
          Approved Applications
        </Link>
        <Link
          to="/admin/rejected-applications"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] ${
            location.pathname === "/admin/rejected-applications" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          <ImCross />
          Rejected Applications
        </Link>
        <Link
          to="/admin/search-applications"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] ${
            location.pathname === "/admin/search-applications" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          <FaSearch />
          Search Applications
        </Link>
        <Link
          to="/admin/course-search"
          className={`flex items-center gap-4 p-4 hover:bg-[#ffffff28] ${
            location.pathname === "/admin/course-search" ? "font-bold bg-[#ffffff28]" : ""
          }`}
        >
          <FaSearch />
          Course Search
        </Link>
      </ul>
    </div>
  )
}

export default AdminSideBar
