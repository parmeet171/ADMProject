import React, { useEffect, useState } from "react";
import AdTable from "../components/Admin/AdTable";
import { useSelector } from "react-redux";

const AdSelectedApli = () => {
  const [selectedApplications, setSelectedApplications] = useState([]);
  const { applications } = useSelector((state) => state.applications);

  useEffect(() => {
    setSelectedApplications(
      applications.filter((application) => 
        application.status === "approved"
      )
    );
  }, [applications]);

  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#2eff51]">
        <h1>Selected Applications</h1>
      </div>
      {selectedApplications.length === 0 ? (
        <h1 className="text-center text-gray-500">No Applications found.</h1>
      ) : (
        <AdTable applications={selectedApplications} />
      )}
    </div>
  );
};

export default AdSelectedApli;
