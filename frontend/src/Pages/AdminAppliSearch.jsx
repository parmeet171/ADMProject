import React from "react";
import AdTable from "../components/Admin/AdTable";
import { CiSearch } from "react-icons/ci";

const AdminAppliSearch = () => {
  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#26a8e4]">
        <h1>Search Applications</h1>
      </div>
      <div class="flex mb-10 rounded-md border-2 border-blue-500 overflow-hidden w-[50%] mx-auto font-[sans-serif]">
        <input
          type="email"
          placeholder="Search Applications..."
          class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
        <button
          type="button"
          class="flex items-center justify-center bg-[#007bff] px-5"
        >
          <CiSearch className="text-white text-xl" />
        </button>
      </div>
      <AdTable />
    </div>
  );
};

export default AdminAppliSearch;
