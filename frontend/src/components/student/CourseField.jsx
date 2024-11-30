import React from "react";
import { data1, data2 } from "../../Pages/StudentHome";

const CourseField = ({ callback, value }) => {
  return (
    <div>
      <div className="text-2xl text-left mb-2 text-[#1d3f88]">
        <h1>Course</h1>
      </div>
      <form className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* firstname */}
        <div className="mb-2 col-span-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="course"
          >
            Select Course *
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none "
            id="course"
            type="text"
            placeholder="Select your course"
            required
            value={value || ""}
            onChange={(e) => callback(e.target.value)}
          >
            <option value="">Choose Here</option>
            <optgroup label="Graduation Courses">
              {data1.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.id}
                </option>
              ))}
            </optgroup>
            {/* <hr className="bg-gray-300" /> */}
            <optgroup label="Post-Graduation Courses">
              {data2.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.id}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CourseField;
