import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppCalendar from './AppCalendar';
import TrialCalendar from './TrialCalendar';
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="/calendar" element={<AppCalendar/>}/>
      <Route path="/trial" element={<TrialCalendar/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
