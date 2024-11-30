import React, { useEffect } from "react";
import PersonalDetails from "../components/student/PersonalDetails";
import FamilyInfo from "../components/student/FamilyInfo";
import EducationalBack from "../components/student/EducationalBack";
import CourseField from "../components/student/CourseField";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { resetCourse, setCourse } from "../store/courseSlice";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const StuApplication = () => {
  const courseData = useSelector((store) => store.course);
  const {user} = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    scrollToTop();
  }, []);
  
  const submitApplication = async () => {
    const {
      course,
      personalDetailId,
      familyInformationId,
      educationalBackgroundId,
    } = courseData;

    try {
      await axios
        .post("http://localhost:4000/api/application/submit", {
          course,
          personalDetailId,
          familyInformationId,
          educationalBackgroundId,
          userId:user._id
        })
        .then((data) => {
          dispatch(resetCourse());
          navigate("/student/application-status");
          toast.success('Application Submitted!')
        });
      } catch (error) {
        console.error(error);
        toast.error(error.message)
        // toast("Application Submitted")
      // setError(error.message);
    }
  };

  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh]  w-[100%]">
      <div className="mb-10 text-5xl text-center font-bold text-[#0051ff]">
        <h1>Application Form</h1>
      </div>

      <div>
        <CourseField callback={(value)=>dispatch(setCourse(value))} value={courseData.course}/>

        <PersonalDetails />

        <FamilyInfo />

        <EducationalBack />

        {/* submit button  */}
        <div className="flex justify-end col-span-4">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={submitApplication}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default StuApplication;
