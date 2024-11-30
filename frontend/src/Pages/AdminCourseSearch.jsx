import React, { useEffect, useState } from "react";
import CourseField from "../components/student/CourseField";
import { useSelector } from "react-redux";
import AdTable from "../components/Admin/AdTable";
import { data1, data2 } from "./StudentHome";

const AdminCourseSearch = () => {
  const { applications } = useSelector((state) => state.applications);
  const [searchedApplication, setSearchedApplication] = useState(applications);
  const [course, setCourse] = useState("");
  const [object, setObject] = useState(null);

  useEffect(() => {
    setSearchedApplication(() => {
      const newApplication = applications.filter(
        (application) =>
          // const fullname =
          //   application.personalDetails.firstName +
          //   application.personalDetails.lastName;

          course === "" || application.course.includes(course)
      );
      const completeData = data1.concat(data2);
      const courseObj = completeData.find((item) => item.id === course);
      if (courseObj) {
        courseObj.applications = applications.filter(
          (app) => app.course == course
        ).length;
      }
      console.log(courseObj);
      setObject(courseObj);
      console.log(object);

      return newApplication;
    });
  }, [course]);

  //  useEffect(()=>{
  //     applications.map(item => {
  //         const course = data1.find(data => data.id === item.course);

  //         if (course) {
  //           course.applications++;
  //           console.log(course);
  //         }

  //       })
  //  }, [])

  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#26a8e4]">
        <h1>Search Applications</h1>
      </div>
      {/* input  */}
      <CourseField callback={(value) => setCourse(value)} value={course} />

      {/* course related applications details   */}
      <div>
        <div className="text-2xl text-left mb-2 text-[#1d3f88]">
          <h1>Course Details</h1>
        </div>
        <div className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* firstname */}
          {!object ? (
            <>
              <h1 className="block text-gray-700 col-span-4 text-sm font-bold mb-2">
                Total Course Details
              </h1>
              <div className="  bg-[#2a14ecf3] text-white flex justify-center items-center gap-8 p-5 rounded-lg">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-4xl font-bold">6000</h1>
                  <p>Total Seats</p>
                </div>
              </div>
              <div className=" bg-[#2a14ecf3] text-white flex justify-center items-center gap-8 p-5 rounded-lg">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-4xl font-bold">{applications.length}</h1>
                  <p>Total Applications</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="block text-gray-700 col-span-4 text-sm font-bold mb-2">
                {object?.id} details
              </h1>
              <div className=" bg-[#2a14ecf3] text-white flex justify-center items-center gap-8 p-5 rounded-lg">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-4xl font-bold">{object?.totalSeats}</h1>
                  <p>Total Seats</p>
                </div>
              </div>
              <div className=" bg-[#2a14ecf3] text-white flex justify-center items-center gap-8 p-5 rounded-lg">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-4xl font-bold">{object?.applications}</h1>
                  <p>Total Applications</p>
                </div>
              </div>
              <div className=" bg-[#2a14ecf3] text-white flex justify-center items-center gap-8 p-5 rounded-lg">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-4xl font-bold">{object?.totalSeats - object?.applications}</h1>
                  <p>Seats left</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {searchedApplication.length > 0 ? (
        <>
          <AdTable applications={searchedApplication} />
        </>
      ) : (
        <h1 className="text-center text-gray-500">No Applications found.</h1>
      )}
    </div>
  );
};

export default AdminCourseSearch;
