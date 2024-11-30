import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateApplication } from "../../store/applicationSlice";
import toast from "react-hot-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { LuCheckCircle } from "react-icons/lu";

const FullApplication = () => {
  const pdfRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const { applications } = useSelector((store) => store.applications);
  const { user } = useSelector((store) => store.user);

  const [application, setApplication] = useState(null);
  const [status, setStatus] = useState(null);
  const [show, setShow] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setApplication(applications.find((app) => app._id === id));
  }, [id]);

  useEffect(() => {
    setStatus(application?.status);
  }, [application]);


  const handlePay = () =>{
    axios
    .put("http://localhost:4000/api/application/updatestatus", {
      status:'confirmed',
      id,
    })
    .then((data) => {
      dispatch(updateApplication({ id, status }));
      setShow(2);
      toast.success("Seat Confirmed Successfully!");
    })
    .catch((err) => {
      toast.error(err.message);
      console.error(err);
    });
  }

  const handleSubmit = () => {
    axios
      .put("http://localhost:4000/api/application/updatestatus", {
        status,
        id,
      })
      .then((data) => {
        dispatch(updateApplication({ id, status }));
        navigate(-1);
        toast.success("  Updated!");
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  const handleDownload = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = pdfWidth - imgWidth * ratio;
      const imgY = 5;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Application.pdf");
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

          <ol className="relative border-s border-[#0051ff] mb-10">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#0051ff] rounded-full mt-1.5 -start-1.5 border border-[#0051ff]"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {new Date(application.createdAt).toDateString()}
              </time>
              <h3>Application Submitted</h3>
              <p className="text-base font-normal text-gray-600">
                Your Application has been submitted successfully.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#0051ff] rounded-full mt-1.5 -start-1.5 border border-[#0051ff]"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {new Date(application.updatedAt).toDateString()}
              </time>
              <h3
                className={`text-lg capitalize font-bold ${
                  application.status === "pending"
                    ? `odd:text-[#e4c726] even:text-[#000000]`
                    : application.status === "approved"
                    ? "text-[#2eff51]"
                    : application.status === "rejected"
                    ? "text-[#ff2e2e]"
                    : "text-[#2eff51]"
                }`}
              >
                {application.status}
              </h3>
              {application.status === "pending" ? (
                <p className="text-base font-normal text-gray-600">
                  Your college application has been submitted and is currently
                  being processed.
                </p>
              ) : application.status === "approved" ? (
                <>
                  <p className="text-base font-normal text-gray-600">
                    Congratulations! Your college application has been
                    successfully accepted.
                  </p>
                  <button
                    onClick={() => setShow(1)}
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Confirm Seat
                  </button>
                 
                </>
              ) : application.status === "rejected" ? (
                <p className="text-base font-normal text-gray-500">
                  Unfortunately, your college application has not been accepted.
                  We wish you the best in your future endeavors.
                </p>
              ) : (
                <p>Your College Addmission process is Completed</p>
              )}
            </li>
          </ol>
          <hr className="mb-5 border-s border-gray-300" />
        </>
      )}

      <div ref={pdfRef}>
        <div className="mb-10 text-5xl text-center font-bold text-[#0051ff]">
          <h1>Application Form</h1>
        </div>

        {/* course  */}
        <div>
          <div className="bg-white grid grid-cols-4 gap-4    rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-2 col-span-2">
              <p className="block text-gray-700 text-sm font-bold mb-2">
                Application No.
              </p>
              {application.applicationId} {/* ///dsajkcikusdchbdscbsdk */}
            </div>
            <div className="mb-2 col-span-2">
              <p className="block text-gray-700 text-sm font-bold mb-2">
                Course
              </p>
              {application.course} {/* ///dsajkcikusdchbdscbsdk */}
            </div>
          </div>
        </div>
        <hr className="mb-5" />

        {/* personalDetails  */}
        <div>
          <div className="text-2xl text-left mb-2 text-[#1d3f88]">
            <h1>Personal Details</h1>
          </div>
          <div className="bg-white grid grid-cols-4 gap-4   rounded px-8 pt-6 pb-8 mb-4">
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
              {new Date(application.personalDetails.dob).toLocaleDateString()}{" "}
              {/* sjciloadjsc */}
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
              {application.personalDetails.addressline2 || "NA"}{" "}
              {/* dsifdslc */}
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
        <hr className="mb-5" />

        {/* familyInformation */}
        <div>
          <div className="text-2xl text-left mb-2 text-[#1d3f88]">
            <h1>Family Information</h1>
          </div>
          <div className="bg-white grid grid-cols-4 gap-4   rounded px-8 pt-6 pb-8 mb-4">
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
              {application.familyInformation.fatherEmail || "NA"}{" "}
              {/* cjkldsjc */}
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
              {application.familyInformation.MotherContactNumber}{" "}
              {/* cvdsdsk */}
            </div>
            {/* email */}
            <div className="mb-2  col-span-2">
              <p className="block text-gray-700 text-sm font-bold mb-2">
                Mother's Email
              </p>
              {application.familyInformation.MotherEmail || "NA"}{" "}
              {/* jcildsjcl */}
            </div>
            {/* dob  */}
            <div className="mb-2  col-span-2"></div>
          </div>
        </div>
        <hr className="mb-5" />

        {/* educationalBackground */}
        <div>
          <div className="text-2xl text-left mb-2 text-[#1d3f88]">
            <h1>Educational Background</h1>
          </div>
          <div className="bg-white grid grid-cols-4 gap-4   rounded px-8 pt-6 pb-8 mb-4">
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
              {application.educationalBackground.twelfthSchoolName}{" "}
              {/* sbhka */}
            </div>
            {/* Board */}
            <div className="mb-2 col-span-2">
              <p className="block text-gray-700 text-sm font-bold mb-2">
                Examination Board
              </p>
              {application.educationalBackground.twelfthBoard}{" "}
              {/* cikuaghscx */}
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
      </div>


{show === 1 &&<div id="default-modal" tabindex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-40 right-40 left-40 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow ">
            {/* <!-- Modal header --> */} 
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-[#18aaff] dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Confirm Your Seat!
                </h3>
                <button onClick={()=>setShow(0)} type="button" className="text-white bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  hover:text-black" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Your application for {application.course} course has been approved by the college.
                    Now to confirm your seat you have to submit the College Fee.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The Fee amount for cofirming your seat for {application.course} course is: 50000 INR.
                </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-4 md:p-5 border-t bg-gray-100 border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handlePay}>Pay now</button>
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>setShow(0)}>Decline</button>
            </div>
        </div>
    </div>
</div>}

{show === 2 &&<div id="default-modal" tabindex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-[#18aaff] dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Payment Status
                </h3>
                <button onClick={()=>setShow(0)} type="button"  className="text-white bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  hover:text-black"data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="py-10 px-20  flex flex-col items-center justify-center space-y-4">
                <div className="text-base ">
                  <LuCheckCircle className="text-[#7cd825] text-7xl" />
                </div>
                <p className="text-xl text-[#7cd825] leading-relaxed">
                    Payment successfull!
                </p>
                <p className="text-base text-center leading-relaxed text-gray-400">
                    Your payment was successfull. Your seat has been confirmed for {application.course}.
                </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>setShow(0)}>Close</button>
            </div>
        </div>
    </div>
</div>}

      <div className="flex justify-end col-span-4">
        {/* submit button  */}
        {user.type === "Admin" && (
          <>
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
          </>
        )}
        {user.type === "Student" && (
          <button
            onClick={handleDownload}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Download Application
          </button>
        )}
      </div>
    </div>
  );
};

export default FullApplication;
