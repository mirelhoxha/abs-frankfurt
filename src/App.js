import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./AppCalendar.js";
import "./App";
import "./TrialCalendar.js";

export default function App() {
  return <div className="app"></div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
