import React, { useState } from "react";
import { PiStudentBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/registerImg.png";
import axios from "axios";
import toast from "react-hot-toast";
const Register = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [err, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 8) {
      return setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    }
    if (!/[0-9]/.test(password)) {
      return setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    }
    if (password !== confirmPassword) {
      return setError("Confirm Password Mismatch");
    }

    try {
      await axios
        .post("http://localhost:4000/api/user/signup", {
          userName,
          email,
          password,
        })
        .then((data) => {
          setUser(data);
          navigate("/student-login");
          toast.success("Registered Succesfully!");
        });
      } catch (error) {
      toast.error(error.message);
      // console.error(error);
      setError(error);
    }
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();

  //   const userName = e.target.userName.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const confirmPassword = e.target.confirmPassword.value;
  //   if (password !== confirmPassword) {
  //     return console.log("Confirm Password Mismatch");
  //   }

  //   await axios
  //     .post("http://localhost:4000/api/user/sendotp", {
  //       email,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setUser({ userName, email, password });
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const handleOtp = async (e) => {
  //   e.preventDefault();
  //   const otp = e.target.otp.value;

  //   if (otp.length !== 4) {
  //     return console.log("Invalid Otp");
  //   }

  //   try {
  //     await axios
  //       .post("http://localhost:4000/api/user/signup", {
  //         ...user,
  //         otp,
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         navigate("/student-login");
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="relative flex flex-col  justify-center items-center bg-[#e6f5ff]  h-[90vh]">
      <div className="flex flex-row w-[90%] mt-5 h-[100%] gap-4 mb-5">
        {/* left  */}
        <div className="gap-3 w-2/4 flex justify-center">
          <img className="object-fill  h-[80vh]" src={registerImg} />
        </div>

        {/* Right  */}
        <form
          className="w-2/4 bg-[#b3e0ff] px-8 py-4  rounded-xl flex flex-col justify-center "
          // onSubmit={handleSignup}
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl mb-6 font-bold flex items-end gap-2">
            <PiStudentBold fontSize="2rem" />
            Student SignUp
          </h1>
          <div className="flex flex-col justify-center mb-2">
            <label htmlFor="userName" className="block mb-2">
              Name:
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
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
          <div className="relative flex flex-col mb-1">
            <label htmlFor="confirmPassword" className="block mb-2 ">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              // type={showPassword ? "text" : "password"}
              type="password"
              className="w-full rounded-md px-4 py-2 focus:outline-[#4ec4f3]"
              placeholder="Enter your password..."
              required
            />
            {/* <button className="absolute right-3 bottom-2.5 text-black text-lg">show/hide pass</button> */}
          </div>
          <div className="min-h-6 text-[#ff3333] text-sm mb-1">
            {err && <p>{err}</p>}
          </div>
          <button
            type="submit"
            className="bg-[#0b9ff5] hover:bg-[#3da3df] text-white font-bold py-2 px-4 rounded w-[100%]"
          >
            Register
          </button>
          <div className="mt-2 flex justify-end ">
            Already have an account? &nbsp;
            <Link to="/student-login" className="text-[blue]">
              Login
            </Link>
          </div>
        </form>
      </div>

      {/* {user && (
        <div className="absolute z-1000 bg-white px-10 py-8 border border-gray-300 rounded-lg">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleOtp}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <input
                      className="w-full h-full  flex flex-col items-center justify-center text-center px-5 py-2 outline-none rounded-xl border border-gray-400 text-2xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 appearance-none"
                      type="number"
                      name="otp"
                    />
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div>
                      <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Register;
