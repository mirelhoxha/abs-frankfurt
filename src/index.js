import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppCalendar from "./AppCalendar";
import TrialCalendar from "./TrialCalendar";
import LoginComponent from "./LoginComponent";
import AdminDashbord from "./components/AdminDashbord/AdminDashbord";
// import AdminDashbord1 from "./components/AdminDashbord/AdminDashbord1";
import UserDashbord from "./components/UserDashbord/UserDashbord";
import ArchiveUser from "./components/Calendar/ArchiveUser";
import ArchiveAdmin from "./components/Calendar/ArchiveAdmin";
import CalendarAdmin from "./components/Calendar/CalendarAdmin";
import UserAdministration from "./components/UserAdministration/UserAdministration";
import AddUser from "./components/AddUser/AddUser";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginComponent />} />
        <Route path="/calendar" element={<AppCalendar />} />
        <Route path="/trial" element={<TrialCalendar />} />
        <Route path="/login" element={<LoginComponent />} />
        {/* <Route path="/admin" element={<AdminDashbord/>}/> */}
        <Route path="/user" element={<UserDashbord/>}/>
        <Route path="/admin" element={<AdminDashbord/>}/>
        <Route path="/calendar-admin" element={<CalendarAdmin/>}/>
        <Route path="/archive-user" element={<ArchiveUser/>}/>
        <Route path="/archive-admin" element={<ArchiveAdmin/>}/>
        <Route path="/user-admin" element={<UserAdministration />}/>
        <Route path="/add-user" element={<AddUser />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
