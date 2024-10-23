import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import registerImg from "../assets/registerImg.png"

const Register = () => {
  return (
    <div className="flex flex-col  justify-center items-center bg-[#e6f5ff]  h-[90vh]">
      <div className="flex flex-row w-[90%] mt-5 h-[100%] gap-4 mb-5">
        {/* left  */}
        <div className="gap-3 w-2/4 flex justify-center">
          <img className="object-fill  h-[80vh]" src={registerImg} />
        </div>

        {/* Right  */}
        <div className="w-2/4 bg-[#b3e0ff] px-8 py-4  rounded-xl flex flex-col justify-center ">
          <h1 className="text-xl mb-6 font-bold flex items-end gap-2">
            <PiStudentBold fontSize="2rem" />
            Student SignUp
          </h1>
          <div className="flex flex-col justify-center mb-2">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
              id="name"
              name="name"
              type="name"
              className="w-full rounded-md px-4 py-2 focus:outline-[#4ec4f3]"
              placeholder="Enter your name..."
              required
            />
          </div>
          <div className="flex flex-col justify-center mb-2">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
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
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
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
          <div className="relative  flex flex-col mb-1">
            <label htmlFor="confirmPassword" className="block mb-2 ">
              Confirm Password:
            </label>
            <input
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
              id="confirmPassword"
              name="confirmPassword"
              // type={showPassword ? "text" : "password"}
              type="confirmPassword"
              className="w-full rounded-md px-4 py-2 focus:outline-[#4ec4f3]"
              placeholder="Enter your password..."
              required
            />
            {/* <button className="absolute right-3 bottom-2.5 text-black text-lg">show/hide pass</button> */}
          </div>
          <div className="min-h-6 text-[#ff3333] text-sm mb-1">
            {/* error */}
          </div>
          <button
            type="submit"
            className="bg-[#0b9ff5] hover:bg-[#3da3df] text-white font-bold py-2 px-4 rounded w-[100%]"
            //   onClick={handleClick}
          >
            Register
          </button>
          <div className="mt-2 flex justify-end ">
            Already have an account? &nbsp;<Link to="/student-login" className="text-[blue]">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
