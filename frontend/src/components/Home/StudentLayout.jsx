import React, { useState } from "react";
import { SideBar } from "../index";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentLayout = () => {
const userData = useSelector(store => store.user);

  if(!userData.loaded){
    return <Navigate to='/'/>
  };

  if(userData.user.type !== "Student"){
    return <Navigate to='/admin'/>
  };

  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default StudentLayout;