import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateApplication } from "../../store/applicationSlice";
import toast from "react-hot-toast";

const FullApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { applications } = useSelector((store) => store.applications);
  const { user } = useSelector((store) => store.user);

  const [application, setApplication] = useState(null);
  const [status, setStatus] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setApplication(applications.find((app) => app._id === id));
  }, [id]);

  useEffect(() => {
    setStatus(application?.status);
  }, [application]);

  const handleSubmit = () => {
    axios
      .put("http://localhost:4000/api/application/updatestatus", {
        status,
        id,
      })
      .then((data) => {
        dispatch(updateApplication({ id, status }));
        navigate(-1);
        toast.success("Status Updated!")
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  if (application == null) {
    return <></>;
  }
  return (
    <div className="flex flex-col  ml-[18.5rem] mr-10 my-4 min-h-[90vh] w-[100%]">
      {user.type === "Student" && (
        <>
          <div className="mb-10 text-5xl text-center font-bold text-[#0051ff]">
            <h1>Status</h1>
          </div>

          <ol class="relative border-s border-[#0051ff] mb-10">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-[#0051ff] rounded-full mt-1.5 -start-1.5 border border-[#0051ff]"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                {new Date(application.createdAt).toDateString()}
              </time>
              <h3>Application Submitted</h3>
              <p class="text-base font-normal text-gray-600">
                Your Application has been submitted successfully.
              </p>
            </li>
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-[#0051ff] rounded-full mt-1.5 -start-1.5 border border-[#0051ff]"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                {new Date(application.updatedAt).toDateString()}
              </time>
              <h3
                className={`text-lg capitalize font-bold ${
                  application.status === "pending"
                    ? `odd:text-[#e4c726] even:text-[#000000]`
                    : application.status === "approved"
                    ? "text-[#2eff51]"
                    : "text-[#ff2e2e]"
                }`}
              >
                {application.status}
              </h3>
              {application.status === "pending" ? (
                <p class="text-base font-normal text-gray-600">
                  Your college application has been submitted and is currently
                  being processed.
                </p>
              ) : application.status === "approved" ? (
                <p class="text-base font-normal text-gray-600">
                  Congratulations! Your college application has been
                  successfully accepted. Wait to hear form college for further
                  process
                </p>
              ) : (
                <p class="text-base font-normal text-gray-500">
                  Unfortunately, your college application has not been accepted.
                  We wish you the best in your future endeavors.
                </p>
              )}
            </li>
          </ol>
          <hr className="mb-5 border-s border-gray-300" />
        </>
      )}
      <div className="mb-10 text-5xl text-center font-bold text-[#0051ff]">
        <h1>Application Form</h1>
      </div>

      {/* course  */}
      <div>
        <div className="text-2xl text-left mb-2 text-[#1d3f88]">
          <h1>Course</h1>
        </div>
        <div className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* firstname */}
          <div className="mb-2 col-span-3">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Select Course *
            </p>
            {application.course} {/* ///dsajkcikusdchbdscbsdk */}
          </div>
        </div>
      </div>

      {/* personalDetails  */}
      <div>
        <div className="text-2xl text-left mb-2 text-[#1d3f88]">
          <h1>Personal Details</h1>
        </div>
        <div className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* firstname */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              First Name *
            </p>
            {application.personalDetails.firstName} {/* jnckudshc */}
          </div>
          {/* lastname */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Last Name *
            </p>
            {application.personalDetails.lastName} {/* dsciouh */}
          </div>
          {/* phone Number */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number *
            </p>
            {application.personalDetails.phoneNumber} {/* chjkdsghck */}
          </div>
          {/* email */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Email *
            </p>
            {application.personalDetails.email} {/* dscjkhdskc */}
          </div>
          {/* dob  */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth *
            </p>
            {application.personalDetails.dob} {/* sjciloadjsc */}
          </div>
          {/* address */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Address line 1 *
            </p>
            {application.personalDetails.addressline1} {/* kljclksdc */}
          </div>
          {/* address l2 */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Address line 2
            </p>
            {application.personalDetails.addressline2} {/* dsifdslc */}
          </div>
          {/* state  */}
          <div className="mb-2  col-span-1">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              State *
            </p>
            {application.personalDetails.state} {/* asdhjkaskjd */}
          </div>
          {/* country  */}
          <div className="mb-2  col-span-1">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Country *
            </p>
            {application.personalDetails.country}
          </div>

          {/* cdccsd */}
        </div>
      </div>

      {/* familyInformation */}
      <div>
        <div className="text-2xl text-left mb-2 text-[#1d3f88]">
          <h1>Family Information</h1>
        </div>
        <div className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* father name */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Father's Name
            </p>
            {application.familyInformation.fatherName} {/* cnkldc */}
          </div>
          {/* father contact no. */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Father's Contact Number
            </p>
            {application.familyInformation.fatherContactNumber}{" "}
            {/* jcxilsdcj */}
          </div>
          {/* email */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Father's Email
            </p>
            {application.familyInformation.fatherEmail} {/* cjkldsjc */}
          </div>
          {/* empty  */}
          <div className="mb-2  col-span-2"></div>
          {/* mother's name */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Mother's Name
            </p>
            {application.familyInformation.MotherName} {/* cnkjlxcn */}
          </div>
          {/* Mother contact no. */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Mother's Contact Number
            </p>
            {application.familyInformation.MotherContactNumber} {/* cvdsdsk */}
          </div>
          {/* email */}
          <div className="mb-2  col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Mother's Email
            </p>
            {application.familyInformation.MotherEmail} {/* jcildsjcl */}
          </div>
          {/* dob  */}
          <div className="mb-2  col-span-2"></div>
        </div>
      </div>

      {/* educationalBackground */}
      <div>
        <div className="text-2xl text-left mb-2 text-[#1d3f88]">
          <h1>Educational Background</h1>
        </div>
        <div className="bg-white grid grid-cols-4 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="col-span-4 text-gray-600">Class 10th</div>
          {/* School Name */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              School Name
            </p>
            {application.educationalBackground.tenthSchoolName} {/* sdckds */}
          </div>
          {/* Board */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Examination Board
            </p>
            {application.educationalBackground.tenthBoard} {/* sahxbsa */}
          </div>
          {/* Marks */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Marks (in Percentage)
            </p>
            {application.educationalBackground.tenthMarks} {/* kjccdlskc */}
          </div>
          {/* year */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">Year</p>
            {application.educationalBackground.tenthYear} {/* hjkbsxaksjxb */}
          </div>

          <div className="col-span-4 text-gray-600">Class 12th</div>
          {/* School Name */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              School Name
            </p>
            {application.educationalBackground.twelfthSchoolName} {/* sbhka */}
          </div>
          {/* Board */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Examination Board
            </p>
            {application.educationalBackground.twelfthBoard} {/* cikuaghscx */}
          </div>
          {/* Marks */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Marks (in Percentage)
            </p>
            {application.educationalBackground.twelfthMarks}{" "}
            {/* sancxkasxjkl */}
          </div>
          {/* year */}
          <div className="mb-2 col-span-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">Year</p>
            {application.educationalBackground.twelfthYear} {/* chasdkljca */}
          </div>
        </div>
      </div>

      {/* submit button  */}
      {user.type === "Admin" && (
        <div className="flex justify-end col-span-4">
          <select
            defaultValue={application.status}
            onChange={(e) => setStatus(e.target.value)}
            // className="mr-5 border border-[#34a3ff] outline-[#34a3ff] rounded"
            className={`shadow border rounded mr-5   leading-tight focus:border-blue-500 focus:outline-none font-bold ${
              status === "pending"
                ? `odd:text-[#e4c726] even:text-[#000000]`
                : status === "approved"
                ? "text-[#2eff51]"
                : "text-[#ff2e2e]"
            }`}
          >
            <option className="font-bold text-[#ffd932]" value="pending">
              Pending
            </option>
            <option className="font-bold text-[#2eff51]" value="approved">
              Approved
            </option>
            <option className="font-bold text-[#ff2e2e]" value="rejected">
              Reject
            </option>
          </select>

          <button
            onClick={handleSubmit}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Update Application
          </button>
        </div>
      )}
    </div>
  );
};

export default FullApplication;
