import React, { Component } from "react"
import "./Authentication.css"
import Header from "./Header/Header.js"
import Login from "./Login/Login.js"
import Register from "./Register/Register.js"
import About from "./About/About.js"

export default class Authentication extends Component {
    constructor(){
        super()
       this.state= {
            navigation: "Login"
        }
    this.navigationChange = (navigation) => {
        this.setState({
            navigation
        })
    }
}
    
    render() {

        return (
            <div className="login-outer">
                <Header />
                {this.state.navigation=== "Login" ? <Login navigationChange = {this.navigationChange} /> : null}
                {this.state.navigation === "Reg" ? <Register /> : null}
                {this.state.navigation === "About" ? <About/> : null}
                <div className="authentication-navigation">
                    <div style = {this.state.navigation === "Login" ? {display: "none"}: null} onClick={()=> {this.navigationChange("Login")}} className="authentication-navigation-buttons login-button">
                        <h6>Login</h6>
                    </div>
                    <div style = {this.state.navigation === "Reg" ? {display: "none"}: null} onClick={()=> {this.navigationChange("Reg")}} className="authentication-navigation-buttons register-button">
                        <h6>Reg</h6>
                    </div>
                    <div style = {this.state.navigation === "About" ? {display: "none"}: null} onClick={()=> {this.navigationChange("About")}} className="authentication-navigation-buttons about-button">
                        <h6>About</h6>
                    </div>
                </div>
                
                

            </div>
        )
    }
}