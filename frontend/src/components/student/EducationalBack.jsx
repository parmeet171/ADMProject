import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEducationalBackgroundId } from "../../store/courseSlice";
import toast from "react-hot-toast";

const EducationalBack = () => {

  const dispatch = useDispatch()
  const [saved, setSaved] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      schoolname,
      board,
      marks,
      year,
      schoolname2,
      board2,
      marks2,
      year2,
    } = e.target;

    try {
      await axios
        .post("http://localhost:4000/api/application/educationalbackground", {
          tenthSchoolName: schoolname.value,
          tenthBoard: board.value,
          tenthMarks: marks.value,
          tenthYear: year.value,
          twelfthSchoolName: schoolname2.value,
          twelfthBoard: board2.value,
          twelfthMarks: marks2.value,
          twelfthYear: year2.value,
        })
        .then((data) => {
          dispatch(setEducationalBackgroundId(data.data))
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
        <h1>Educational Background</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="col-span-4 text-gray-600">Class 10th</div>
        {/* School Name */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="schoolname"
          >
            School Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="schoolname"
            type="text"
            placeholder="Enter your School Name..."
            required
          />
        </div>
        {/* Board */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="board"
          >
            Examination Board
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="board"
            type="text"
            placeholder="Enter your Examination Board..."
            required
          />
        </div>
        {/* Marks */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="marks"
          >
            Marks (in Percentage)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="marks"
            type="text"
            placeholder="Enter your 10th Marks..."
            required
          />
        </div>
        {/* year */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year"
          >
            Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="year"
            type="number"
            placeholder="Enter 10th passout year..."
            required
          />
        </div>

        <div className="col-span-4 text-gray-600">Class 12th</div>
        {/* School Name */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="schoolname2"
          >
            School Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="schoolname2"
            type="text"
            placeholder="Enter your School Name..."
            required
          />
        </div>
        {/* Board */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="board2"
          >
            Examination Board
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="board2"
            type="text"
            placeholder="Enter your Examination Board..."
            required
          />
        </div>
        {/* Marks */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="marks2"
          >
            Marks (in Percentage)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="marks2"
            type="text"
            placeholder="Enter your 12th Marks..."
            required
          />
        </div>
        {/* year */}
        <div className="mb-2 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year2"
          >
            Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="year2"
            type="number"
            placeholder="Enter 12th passout year..."
            required
          />
        </div>

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

export default EducationalBack;
