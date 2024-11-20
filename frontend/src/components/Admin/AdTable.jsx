import React from "react";
import { Link } from "react-router-dom";

const AdTable = ({ showStatus, applications }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-white">
        <thead className="text-xs uppercase bg-[#2c6fff]">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.No.
            </th>
            <th scope="col" className="px-6 py-3">
              Student Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Course
            </th>
            {/* {showStatus && (
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            )} */}
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Application
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-900">
          {applications.map((item, idx) => (
            <tr key={idx} className="bg-white  even:bg-gray-300  border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {idx + 1}.
              </th>
              <td className="px-6 py-4">
                {item.personalDetails.firstName +
                  " " +
                  item.personalDetails.lastName}
              </td>
              <td className="px-6 py-4">{item.personalDetails.phoneNumber}</td>
              <td className="px-6 py-4">{item.course}</td>
              {/* {showStatus && <td className="px-6 py-4">{item.status}</td>} */}
              <td
                className={`px-6 py-4 capitalize font-bold ${
                  item.status === "pending"
                    ? `odd:text-[#e4c726] even:text-[#000000]`
                    : item.status === "approved"
                    ? "text-[#2eff51]"
                    : "text-[#ff2e2e]"
                }`}
              >
                {item.status}
              </td>
              <td className="px-6 py-4">
                <Link to={`/admin/application-details/${item._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Show
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdTable;
