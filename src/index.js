import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import AppCalandar from './AppCalandar';
import TrialCalendar from './TrialCalendar'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <AppCalandar />
    {/* <TrialCalendar/> */}
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
