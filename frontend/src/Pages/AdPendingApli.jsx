import React from "react";
import AdTable from "../components/Admin/AdTable";

const AdPendingApli = () => {
  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#e4c726]">
        <h1>Pending Applications</h1>
      </div>

      <AdTable />
    </div>
  );
};

export default AdPendingApli;
