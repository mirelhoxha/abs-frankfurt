import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./AppCalandar.js"
import { Link } from "react-router";

export default function App() {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


    // Generate JSX code for error message
  const backBlur = () => <div className="blur"/>
  

  // JSX code for login form
  const renderForm = (
    
    <div className="form">
      <form onSubmit={handleSubmit}>

        <div className="input-container">
          <label className="label">Username</label>
          <input type="text" name="uname" placeholder="Email" required />
          {renderErrorMessage("uname")}
        </div>
        
        <div className="input-container">
          <label className="label">Password</label>
          <input type="password" name="pass" placeholder="Password" required />
          {renderErrorMessage("pass")}
        </div>
        

        <div className="button-container">
          <button type="submit">LOGIN</button>
        </div>
        <div className="forgot">
        <a href="http://localhost:3001/">Forgot Password?</a>
        </div>
      </form>
    </div>
  
  );

  return (
  
    <div className="app">
    <div className="form" >
      <div className="login-form" >
      {/* <div className="blur"/> */}
        <div className="title"><b>Welcome!</b></div>
        <div className="subtitle">Bitte logge dich in Deinen Account ein.</div>

        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        
        </div>
      </div>
    </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


