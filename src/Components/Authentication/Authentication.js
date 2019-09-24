import React from "react"
import "./Authentication.css"
import Header from "./Header/Header.js"
import Login from "./Login/Login.js"

export default function () {
    return(
        <div className="login-outer">
            <Header/>
            <Login/>
            <div className="authentication-navigation">
                <div className="authentication-navigation-buttons login-button">
                    <h6>Login</h6>
                </div>
                <div className="authentication-navigation-buttons register-button">
                    <h6>Reg</h6>
                </div>
                <div className="authentication-navigation-buttons about-button">
                    <h6>About</h6>
                </div>
            </div>
        </div>
    )
}