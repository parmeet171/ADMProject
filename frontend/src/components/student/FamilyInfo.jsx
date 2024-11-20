import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFamilyInformationId } from "../../store/courseSlice";
import toast from "react-hot-toast";

const FamilyInfo = () => {
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      fathername,
      fathercontactnumber,
      fatheremail,
      mothername,
      mothercontactnumber,
      motheremail,
    } = e.target;

    try {
      await axios
        .post("http://localhost:4000/api/application/familyinformation", {
          fatherName: fathername.value,
          fatherContactNumber: fathercontactnumber.value,
          fatherEmail: fatheremail.value,
          MotherName: mothername.value,
          MotherContactNumber: mothercontactnumber.value,
          MotherEmail: motheremail.value
        })
        .then((data) => {
          dispatch(setFamilyInformationId(data.data));
          setSaved(true);
          toast.success("Saved");
        });
    } catch (error) {
      toast.error(err.message);
      console.error(error);
    }
  };

  return (
    <div>
      <div className="text-2xl text-left mb-2 text-[#1d3f88]">
        <h1>Family Information</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* father name */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fathername"
          >
            Father's Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="fathername"
            type="text"
            placeholder="Enter your Father;s Name..."
            required
          />
        </div>
        {/* father contact no. */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fathercontactnumber"
          >
            Father's Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="fathercontactnumber"
            type="tel"
            placeholder="Enter your Father's Contact Number..."
            required
          />
        </div>
        {/* email */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fatheremail"
          >
            Father's Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="fatheremail"
            type="email"
            placeholder="Enter your Father's Email..."
          />
        </div>
        {/* empty  */}
        <div className="mb-2  col-span-2"></div>

        {/* mother's name */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mothername"
          >
            Mother's Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="mothername"
            type="text"
            placeholder="Enter your Mother's Name..."
            required
          />
        </div>
        {/* Mother contact no. */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mothercontactnumber"
          >
            Mother's Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="mothercontactnumber"
            type="tel"
            placeholder="Enter your Mother's Contact Number..."
            required
          />
        </div>
        {/* email */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="motheremail"
          >
            Mother's Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="motheremail"
            type="email"
            placeholder="Enter your Mother's Email..."
            // required
          />
        </div>
        {/* dob  */}
        <div className="mb-2  col-span-2"></div>

        {/* submit button  */}
        <div className="flex justify-end col-span-4">
          <button
            className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${saved ? "cursor-not-allowed bg-blue-300 " : "cursor-pointer bg-blue-500 hover:bg-blue-700"}`}
            type="submit"
            disabled={saved}
          >
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FamilyInfo;
