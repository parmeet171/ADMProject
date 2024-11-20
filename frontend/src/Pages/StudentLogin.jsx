import React, { useState } from "react";
import student from "../assets/student.png";
import { PiStudentBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";
import toast from "react-hot-toast";

const StudentLogin = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await axios
        .post("http://localhost:4000/api/user/login", {
          email,
          password,
          type: "Student",
        })
        .then((data) => {
          dispatch(setUser({ user: data.data.user }));
          navigate("/student");
          toast.success("Logged In Succesfully!");
        });
      } catch (error) {
      toast.error(error.message);
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center bg-[#e6f5ff]  h-[90vh]">
      <div className="flex flex-row w-[90%] mt-5 h-[100%] gap-4 mb-5">
        {/* left  */}
        <div className="gap-3 w-2/4 flex justify-center">
          <img className="object-fill  h-[80vh]" src={student} />
        </div>

        {/* Right  */}
        <form
          onSubmit={handelSubmit}
          className="w-2/4 bg-[#b3e0ff] px-8 py-4  rounded-xl flex flex-col justify-center "
        >
          <h1 className="text-xl mb-6 font-bold flex items-end gap-2">
            <PiStudentBold fontSize="2rem" />
            Student LogIn
          </h1>
          <div className="flex flex-col justify-center mb-2">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-md px-4 py-2 focus:outline-[#4ec4f3]"
              placeholder="Enter your email..."
              required
            />
          </div>
          <div className="relative  flex flex-col mb-1">
            <label htmlFor="password" className="block mb-2 ">
              Password:
            </label>
            <input
              id="password"
              name="password"
              // type={showPassword ? "text" : "password"}
              type="password"
              className="w-full rounded-md px-4 py-2 focus:outline-[#4ec4f3]"
              placeholder="Enter your password..."
              required
            />
            {/* <button className="absolute right-3 bottom-2.5 text-black text-lg">show/hide pass</button> */}
          </div>
          <div className="min-h-6 text-[#ff3333] text-sm mb-1">
            {error && <p>{error}</p>}
          </div>
          <button
            type="submit"
            className="bg-[#0b9ff5] hover:bg-[#3da3df] text-white font-bold py-2 px-4 rounded w-[100%]"
          >
            Login
          </button>

          <div className="mt-2 flex justify-end ">
            Don't have an account? &nbsp;
            <Link to="/register" className="text-[blue]">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
