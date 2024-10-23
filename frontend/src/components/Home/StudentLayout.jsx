import React, { useState } from "react";
import { SideBar } from "../index";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default StudentLayout;