import React from "react";
import { RiAdminLine } from "react-icons/ri";

const AdminLogin = () => {
  return (
    <div className="flex justify-center items-center bg-[#e6f5ff] h-[90vh]">
      <div className=" bg-[#b3e0ff] px-8 py-6 rounded-xl flex flex-col justify-center h-[60vh] w-[30%]">
        <h1 className="text-xl mb-6 font-bold flex items-end gap-2">
          <RiAdminLine fontSize="2rem" />
          Admin LogIn
        </h1>
        <div className="flex flex-col mb-1">
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
        <div className="min-h-6 text-[#ff3333] text-sm mb-1">{/* error */}</div>
        <button
          type="submit"
          className="bg-[#0b9ff5] hover:bg-[#3da3df] text-white font-bold py-2 px-4 rounded w-[100%]"
          //   onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
