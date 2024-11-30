import React from "react";
import { Link } from "react-router-dom";

const StuTable = ({ applications }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-white">
        <thead className="text-xs uppercase bg-[#2c6fff]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Application No.
            </th>
            <th scope="col" className="px-6 py-3">
              Course
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Submission Date
            </th>
            <th scope="col" className="px-6 py-3">
              Application
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-900">
          {applications.map((application, index) => (
            <tr key={index} className="odd:bg-white  even:bg-gray-100  border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {application.applicationId}
              </th>

              <td className="px-6 py-4">{application.course}</td>
              <td
                className={`px-6 py-4 capitalize font-bold ${
                  application.status === "pending"
                    ? `odd:text-[#e4c726] even:text-[#000000]` 
                    : application.status === "approved"
                    ? "text-[#2eff51]"
                    : application.status === "confirmed"
                    ? "text-[#48ff1b]"
                    : "text-[#ff2e2e]"
                }`}
                >
                {application.status}
              </td>
              <td className="px-6 py-4">
                {new Date(application.createdAt).toDateString()}
              </td>
              <td className="px-6 py-4">
                <Link to={`/student/application-details/${application._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StuTable;
