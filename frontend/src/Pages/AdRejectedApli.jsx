import React, { useEffect, useState } from "react";
import AdTable from "../components/Admin/AdTable";
import { useSelector } from "react-redux";

const AdRejectedApli = () => {

  const [rejectedApplications, setRejectedApplications] = useState([]);
  const { applications } = useSelector((state) => state.applications);

  useEffect(() => {
    setRejectedApplications(applications.filter((application) => 
      application.status === "rejected"
    ))
  }, [applications])

  return (
    
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#ff2e2e]">
        <h1>Rejected Applications</h1>
      </div>

      {rejectedApplications.length === 0 ? <h1 className="text-center text-gray-500">No Applications found.</h1> : <AdTable applications={rejectedApplications} />}
    </div>
  );
};

export default AdRejectedApli;
