import React from "react";
import { LiaBookSolid } from "react-icons/lia";
import { FaUsers, FaCheck } from "react-icons/fa";
import { FaRegSquareCaretDown } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { BsStack } from "react-icons/bs";
const AdminHome = () => {
  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <h1 className="text-5xl text-center font-bold text-[#0051ff] mb-5">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-10  p-5  text-white">
        <div className=" bg-[#2a14ecf3] flex justify-left items-center gap-8 p-5 rounded-lg">
          <LiaBookSolid className="text-8xl" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">0</h1>
            <p>Courses</p>
          </div>
        </div>
        <div className="bg-[#ec6a14f3] flex justify-left items-center gap-8 p-5 rounded-lg">
          <FaUsers className="text-8xl" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">0</h1>
            <p>Registered Users</p>
          </div>
        </div>
        {/* <div className="row-span-2 bg-[#14ec43f3] flex flex-col justify-left items-center gap-2 px-4 py-4 rounded-lg">
          <FaCheck className="text-8xl mb-5" />
          <h1 className="text-4xl font-bold">0</h1>
          <p className="text-2xl">Selected Students</p>
        </div> */}
        <div className="bg-[#6714ecf3] flex justify-left items-center gap-8 p-5 rounded-lg">
          <BsStack className="text-8xl" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">0</h1>
            <p>Total Applications</p>
          </div>
        </div>
        <div className="bg-[#bfd403f3] flex justify-left items-center gap-8 p-5 rounded-lg">
          <FaRegSquareCaretDown className="text-8xl" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">0</h1>
            <p>Pending Applications</p>
          </div>
        </div>
        <div className=" bg-[#14ec43f3] flex justify-left items-center gap-8 p-5 rounded-lg">
          <FaCheck className="text-8xl" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">0</h1>
            <p>Selected Applications</p>
          </div>
        </div>
        <div className=" bg-[#ec2214f3] flex justify-left items-center gap-8 p-5 rounded-lg">
          <ImCross className="text-8xl" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">0</h1>
            <p>Rejected Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
