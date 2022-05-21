import React, { useState } from "react";
import "./index.css";
import "./AppCalendar.js";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function LoginComponent() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigation = useNavigate();

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1",
        },
        {
            username: "user2",
            password: "pass2",
        },
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password",
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
                navigation("/trial");
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

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className="label">USERNAME</label>
                    <input type="text" name="uname" placeholder="Email" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label className="label">PASSWORD</label>
                    <input type="password" name="pass" placeholder="Password" required />
                    {renderErrorMessage("pass")}
                </div>
                <Button title="Login" />
                <div className="forgot">
                    <a href="http://localhost:3001/">Forgot Password?</a>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="login-header">
                    <img className="header-image" src="/images/logo.png" />
                    <p className="title">Welcome!</p>
                    <p className="subtitle">Please Login into your Account below.</p>
                </div>
                <div className="login-body">
                    {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
