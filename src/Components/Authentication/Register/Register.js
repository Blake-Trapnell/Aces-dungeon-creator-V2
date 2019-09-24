import React, {Component} from "react"
import "./Register.css"

export default class Register extends Component {
    state = {
        username: "",
        password: "",
        passwordconfirm: "",
        email: "",
    }

    handleChange(key, e) {
        this.setState({
            [key]: e
        })
    }

    render() {
        const {password, passwordconfirm} = this.state
        return (
            <div className="register-outer">
                <div className="register-upper">
                    <h1 className="register-text">Username</h1>
                    <input onChange={(e)=>this.handleChange("username",e.target.value)} type="text" value={this.state.username} />
                    <h1 className="register-text">Password</h1>
                    <input onChange={(e)=>this.handleChange("password",e.target.value)} type="password" value={this.state.password} />
                    <h1 style={password === passwordconfirm ? null : {color: "red"}} className="register-text">Confirm Password</h1>
                    <input onChange={(e)=>this.handleChange("passwordconfirm",e.target.value)} type="password" value={this.state.passwordconfirm} />
                    <h1 className="register-text">Email</h1>
                    <input onChange={(e)=>this.handleChange("email",e.target.value)} type="text" value={this.state.email} />
                    <h1 className="register-text">are you a dungeon master?</h1>
                    <div className="register-dungeonmaster-radio">
                        <div className="dm-yes">
                            <h6>yes</h6>
                            <input type="radio" />
                        </div>
                        <div className="dm-no">
                            <h6>no</h6>
                            <input type="radio" />
                        </div>
                    </div>
                </div>
                <div className="register-lower">

                </div>
            </div>
        )
    }
}