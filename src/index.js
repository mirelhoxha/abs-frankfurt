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
import Calendar  from "./components/Calendar/Calendar";
import Archive from "./components/Calendar/Archive";
import ArchiveAdmin from "./components/Calendar/ArchiveAdmin";


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
        <Route path="/calendar1" element={<Calendar/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/archive-admin" element={<ArchiveAdmin/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
