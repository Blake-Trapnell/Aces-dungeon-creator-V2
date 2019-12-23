import React, { Component } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import {withRouter} from "react-router-dom"
import  {setUser} from "../../../ducks/reducer"
import {connect} from "react-redux"
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state= {
            backgroundimg: ["https://i.pinimg.com/originals/88/d0/2e/88d02ef5f7814fdb0d73f521b5d86ad5.jpg","https://i.imgur.com/PpzXfFy.jpg","http://dontstopthinking.com/wp-content/uploads/2017/01/Fighter-Serio-Custode-Character-Sheet.jpg","https://i.pinimg.com/originals/13/37/00/1337008ebf61971019037fe898a74599.jpg","https://wiki.roll20.net/images/f/f0/5E_OGL_Sheet_Core_v2.6.png"],
            backgroundPosition: 0,
            username: "",
            password: "",
        }
    }
    axios = () => {
        axios.get('http://www.dnd5eapi.co/api/classes/5')
    }
    backgroundPosition (backgroundPosition) {
        this.setState({
            backgroundPosition
        })
    }
    logmein = async () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          })
        const {username, password} = this.state
        let user = await axios.post('/auth/users/login', {username, password})
        user = user.data
        if(user.message === "Logged in") {
            Toast.fire({
                type: "success",
                title: `${username} signed in`
            })
            this.props.setUser(user.user)
          return  this.props.history.push('/home')
        }
        else if (user.message === "Username not found"){
            Toast.fire({
                type: "error",
                title: 'Username not found'
            })
        }
        else if(user.message === "wrong") {
            Toast.fire({
                type: "error",
                title: 'Wrong username & or password'
            })
        }
    }
    handleChange = (key, e) => {
        this.setState({
            [key]: e
        })
    }
    render() {
        return (
            <div className="login-outer">
                <div className="login-upper">
                    <div className="login-inputs">
                        <h3 className="login-text">Login</h3>
                        <input onChange={(e)=>{this.handleChange("username",e.target.value)}} type="text" />
                        <h3 className="login-text">Password</h3>
                        <input onChange={(e)=>{this.handleChange("password",e.target.value)}} type="password" />
                        <button onClick={()=> {this.logmein(this.state.username, this.state.password)}} className='log-me-in'>Login</button>
                        <h6 className="login-text">newuser ? <p onClick={()=> {this.props.navigationChange('Reg')}} className="login-clickhere">ClickHere</p></h6>
                    </div>
                </div>
                <div className="login-lower">
                    <div className="login-character-sheet-display">
                        <div style={{backgroundImage: `url(${this.state.backgroundimg[this.state.backgroundPosition]})`}} className="login-character-sheet-image"></div>
                        <div className="login-character-sheet-selection">
                            <div style ={this.state.backgroundPosition === 0 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1FF"}: null} onClick={()=> {this.backgroundPosition(0)}} className="image-position position-0"></div>
                            <div style ={this.state.backgroundPosition === 1 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1FF"}: null} onClick={()=> {this.backgroundPosition(1)}} className="image-position position-1"></div>
                            <div style ={this.state.backgroundPosition === 3 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1FF"}: null} onClick={()=> {this.backgroundPosition(3)}} className="image-position position-3"></div>
                            <div style ={this.state.backgroundPosition === 2 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1FF"}: null} onClick={()=> {this.backgroundPosition(2)}} className="image-position position-2"></div>
                            <div style ={this.state.backgroundPosition === 4 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1FF"}: null} onClick={()=> {this.backgroundPosition(4)}} className="image-position position-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, {setUser})(Login));