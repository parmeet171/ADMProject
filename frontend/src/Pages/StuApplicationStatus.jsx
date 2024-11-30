import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StuTable from "../components/student/StuTable";
import { setApplications } from "../store/applicationSlice";

const StuApplicationStatus = () => {
  const { applications } = useSelector((store) => store.applications);
  const { user } = useSelector((store) => store.user);
  
  const dispatch = useDispatch();

  useEffect(() => {
    axios
    .get(`http://localhost:4000/api/application/${user._id}`)
    .then((data) => dispatch(setApplications(data.data.applications)))
    .catch((err) => {
      console.error(err);
    });
  }, [])

  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#0051ff]">
        <h1>Application Status</h1>
      </div>
      {applications.length > 0 ? (
        <StuTable applications={applications} />
      ) : (
        <h1 className="text-center text-gray-500">No Submitted Application</h1>
      )}
    </div>
  );
};

export default StuApplicationStatus;
