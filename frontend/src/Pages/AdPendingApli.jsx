import React, { useEffect, useState } from "react";
import AdTable from "../components/Admin/AdTable";
import { useSelector } from "react-redux";

const AdPendingApli = () => {
  const [pendingApplications, setPendingApplications] = useState([]);
  const { applications } = useSelector((state) => state.applications);

  useEffect(() => {
    setPendingApplications(
      applications.filter((application) => application.status === "pending")
    );
  }, [applications]);

  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#e4c726]">
        <h1>Pending Applications</h1>
      </div>
      {pendingApplications.length === 0 ? (
        <h1 className="text-center text-gray-500">No Applications found.</h1>
      ) : (
        <AdTable applications={pendingApplications} />
      )}
    </div>
  );
};

export default AdPendingApli;
