import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  StudentLogin,
  Home,
  AdminLogin,
  Register,
  StuApplication,
  StuApplicationStatus,
  StudentHome,
  AdminHome,
  PageNotFound,
  AdPendingApli,
  AdSelectedApli,
  AdRejectedApli,
  AdminAppliSearch,
  AdminCourseSearch,
} from "./Pages";
import { AdminLayout, Navbar, StudentLayout } from "./components";
import FullApplication from "./components/Admin/FullApplication";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
    <Toaster
       position="bottom-left"
       reverseOrder={false}
    />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* login routes  */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
        {/* student routes  */}
        <Route path="student" element={<StudentLayout />}>
          <Route index element={<StudentHome />} />
          <Route path="application" element={<StuApplication />} />
          <Route path="application-status" element={<StuApplicationStatus />} />
          <Route path="application-details/:id" element={<FullApplication />} />
        </Route>
        {/* admin routes  */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="pending-applications" element={<AdPendingApli />} />
          <Route path="selected-applications" element={<AdSelectedApli />} />
          <Route path="rejected-applications" element={<AdRejectedApli />} />
          <Route path="search-applications" element={<AdminAppliSearch />} />
          <Route path="application-details/:id" element={<FullApplication />} />
          <Route path="course-search" element={<AdminCourseSearch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
