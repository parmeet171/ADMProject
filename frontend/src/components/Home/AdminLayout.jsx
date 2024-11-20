import React from 'react'
import AdminSideBar from '../Navbar/AdminSideBar'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AdminLayout = () => {
  const userData = useSelector(store => store.user);

  if(!userData.loaded){
    return <Navigate to='/'/>
  };

  if(userData.user.type !== "Admin"){
    return <Navigate to='/student'/>
  };

  return (
    <div className="flex">
      <AdminSideBar />
      <Outlet />
    </div>
  )
}

export default AdminLayout
