import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppCalendar from "./AppCalendar";
import TrialCalendar from "./TrialCalendar";
import LoginComponent from "./LoginComponent";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginComponent />} />
        <Route path="/calendar" element={<AppCalendar />} />
        <Route path="/trial" element={<TrialCalendar />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
