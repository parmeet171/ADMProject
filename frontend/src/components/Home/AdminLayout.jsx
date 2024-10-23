import React from 'react'
import AdminSideBar from '../Navbar/AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSideBar />
      <Outlet />
    </div>
  )
}

export default AdminLayout
