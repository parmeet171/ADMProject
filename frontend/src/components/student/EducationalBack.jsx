import React from 'react'

const EducationalBack = () => {
  return (
    <div>
      <div className="text-2xl text-left mb-2 text-[#1d3f88]">
        <h1>Educational Background</h1>
      </div>
      <div className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* firstname */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="firstname"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="firstname"
            type="text"
            placeholder="Enter your First Name..."
            required
          />
        </div>
        {/* lastname */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="lastname"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="lastname"
            type="text"
            placeholder="Enter your Last Name..."
            required
          />
        </div>
        {/* phone Number */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="phonenumber"
          >
            Phone Number *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="phonenumber"
            type="tel"
            placeholder="Enter your Phone Number..."
            required
          />
        </div>
        {/* email */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
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
            for="dob"
          >
            Date of Birth
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
            for="addressl1"
          >
            Address line 1
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="addressl1"
            type="text"
            placeholder="Enter your Date of Address..."
            required
          />
        </div>
        {/* address l2 */}
        <div className="mb-2  col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="addressl2"
          >
            Address line 2
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="addressl2"
            type="text"
            placeholder="Enter your Date of Address..."
            required
          />
        </div>
        {/* state  */}
        <div className="mb-2  col-span-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="state"
          >
            State
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
            for="country"
          >
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:border-blue-500 focus:outline-none"
            id="country"
            type="text"
            placeholder="Enter your Country..."
            required
          />
        </div>

        {/* submit button  */}
        {/* <div className="flex justify-end col-span-4">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit Application
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default EducationalBack
