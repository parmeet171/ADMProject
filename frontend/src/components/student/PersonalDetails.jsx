import axios from "axios";
import React, { useState } from "react";
import { setPersonalDetailsId } from "../../store/courseSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      addressline1,
      addressline2,
      dob,
      state,
      country,
    } = e.target;

    try {
      await axios
        .post("http://localhost:4000/api/application/personaldetail", {
          firstName: firstName.value,
          lastName: lastName.value,
          phoneNumber: phoneNumber.value,
          email: email.value,
          addressline1: addressline1.value,
          addressline2: addressline2.value,
          dob: dob.value,
          state: state.value,
          country: country.value,
        })
        .then((data) => {
          dispatch(setPersonalDetailsId(data.data));
          setSaved(true);
          toast.success("Saved");
        });
    } catch (error) {
      console.error(error);
      toast.error(err.message);
      // setError(error.message);
    }
  };

  return (
    <div>
      <div className="text-2xl text-left mb-2 text-[#1d3f88]">
        <h1>Personal Details</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* firstname */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="firstName"
            type="text"
            placeholder="Enter your First Name..."
            required
          />
        </div>
        {/* lastname */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="lastName"
            type="text"
            placeholder="Enter your Last Name..."
            required
          />
        </div>
        {/* phone Number */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="phoneNumber"
            type="number"
            placeholder="Enter your Phone Number..."
            required
          />
        </div>
        {/* email */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="email"
            type="email"
            placeholder="Enter your Email..."
            required
          />
        </div>
        {/* dob  */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            Date of Birth *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="dob"
            type="date"
            placeholder="Enter your Date of Birth..."
            required
          />
        </div>
        {/* address */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="addressline1"
          >
            Address line 1 *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="addressline1"
            type="text"
            placeholder="Enter your Date of Address..."
            required
          />
        </div>
        {/* address l2 */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="addressline2"
          >
            Address line 2
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="addressline2"
            type="text"
            placeholder="Enter your Date of Address..."
          />
        </div>
        {/* state  */}
        <div className="mb-2  col-span-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="state"
          >
            State *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="state"
            type="text"
            placeholder="Enter your State..."
            required
          />
        </div>
        {/* country  */}
        <div className="mb-2  col-span-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
            Country *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="country"
            type="text"
            placeholder="Enter your Country..."
            required
          />
        </div>

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

export default PersonalDetails;
