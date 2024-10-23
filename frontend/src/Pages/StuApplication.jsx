import React, { useEffect } from "react";
import PersonalDetails from "../components/student/PersonalDetails";
import FamilyInfo from "../components/student/FamilyInfo";
import EducationalBack from "../components/student/EducationalBack";

const StuApplication = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#0051ff]">
        <h1>Application Form</h1>
      </div>

      <form>
        <PersonalDetails />

        <FamilyInfo />

        <EducationalBack />

        {/* submit button  */}
        <div className="flex justify-end col-span-4">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default StuApplication;
