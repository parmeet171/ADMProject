import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCourse } from "../../store/courseSlice";

const CourseField = () => {
  const course = useSelector(state => state.course);
  const dispatch = useDispatch();

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
            value={course.course || ''}
            onChange={(e)=>dispatch(setCourse(e.target.selectedOptions[0].innerText))}
          >
            <option value="" disabled hidden>
              Choose here
            </option>
            <optgroup label="Graduation Courses">
              <option value="Bachelor of Computer Applications(BCA)">Bachelor of Computer Applications(BCA)</option>
              <option value="Bachelor of Technology(B.Tech)">Bachelor of Technology(B.Tech)</option>
              <option value="Bachelor of Science in Computer Science(B.Sc)">Bachelor of Science in Computer Science(B.Sc)</option>
              <option value="Bachelor of Science in Information Technology(B.Sc)">Bachelor of Science in Information Technology(B.Sc)</option>
              <option value="Bachelor of Business Administration in Information Systems(BBA)">Bachelor of Business Administration in Information Systems(BBA)</option>
              <option value="Bachelor of Engineering in Computer Science and Engineering(B.E)">Bachelor of Engineering in Computer Science and Engineering(B.E)</option>
            </optgroup>
            {/* <hr className="bg-gray-300" /> */}
            <optgroup label="Post-Graduation Courses">
              <option value="Master of Computer Applications(MCA)">Master of Computer Applications(MCA)</option>
              <option value="Master of Technology in Information Technology(M.Tech)">Master of Technology in Information Technology(M.Tech)</option>
              <option value="Master of Science in Computer Science(M.Sc)">Master of Science in Computer Science(M.Sc)</option>
              <option value="Master of Science in Information Technology(M.Sc)">Master of Science in Information Technology(M.Sc)</option>
              <option value="Master of Business Administration in Information Systems(MBA)">Master of Business Administration in Information Systems(MBA)</option>
              <option value="Master of Engineering in Computer Science and Engineering(M.E)">Master of Engineering in Computer Science and Engineering(M.E)</option>
            </optgroup>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CourseField;
