import React, { useState } from "react";
import AdTable from "../components/Admin/AdTable";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

const AdminAppliSearch = () => {
  const { applications } = useSelector((state) => state.applications);
  const [searchedApplication, setSearchedApplication] = useState(applications);
  const searchApplication = (e) => {
    setSearchedApplication(
      applications.filter((application) => {
        const fullname =
          application.personalDetails.firstName +
          application.personalDetails.lastName;

        
        return fullname.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#26a8e4]">
        <h1>Search Applications</h1>
      </div>
      {/* input  */}
      <div className="flex mb-10 rounded-md border-2 border-blue-500 overflow-hidden w-[50%] mx-auto font-[sans-serif]">
        <input
          type="email"
          onChange={searchApplication}
          placeholder="Search Applications..."
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
        <button
          type="button"
          className="flex items-center justify-center bg-[#007bff] px-5"
        >
          <CiSearch className="text-white text-xl" />
        </button>
      </div>

      {searchedApplication.length > 0 ? (
        <AdTable applications={searchedApplication} />
      ) : (
        <h1 className="text-center text-gray-500">No Applications found.</h1>
      )}
    </div>
  );
};

export default AdminAppliSearch;
