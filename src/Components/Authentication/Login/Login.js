import React, { Component } from "react"
import './Login.css'

export default class Login extends Component {
    state= {
        backgroundimg: ["https://i.pinimg.com/originals/88/d0/2e/88d02ef5f7814fdb0d73f521b5d86ad5.jpg","https://i.imgur.com/PpzXfFy.jpg","http://dontstopthinking.com/wp-content/uploads/2017/01/Fighter-Serio-Custode-Character-Sheet.jpg","https://i.pinimg.com/originals/13/37/00/1337008ebf61971019037fe898a74599.jpg","https://wiki.roll20.net/images/f/f0/5E_OGL_Sheet_Core_v2.6.png"],
        backgroundPosition: 0
    }

    backgroundPosition (backgroundPosition) {
        this.setState({
            backgroundPosition
        })
    }

    render() {
        return (
            <div className="login-outer">
                <div className="login-upper">
                    <div className="login-inputs">
                        <h3 className="login-text">Login</h3>
                        <input type="text" />
                        <h3 className="login-text">Password</h3>
                        <input type="password" />
                        <button className='log-me-in'>Login</button>
                        <h6 className="login-text">newuser ? <p >ClickHere</p></h6>
                    </div>
                </div>
                <div className="login-lower">
                    <div className="login-character-sheet-display">
                        <div style={{backgroundImage: `url(${this.state.backgroundimg[this.state.backgroundPosition]})`}} className="login-character-sheet-image"></div>
                        <div className="login-character-sheet-selection">
                            <div style ={this.state.backgroundPosition === 0 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1ff"}: null} onClick={()=> {this.backgroundPosition(0)}} className="image-position position-0"></div>
                            <div style ={this.state.backgroundPosition === 1 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1ff"}: null} onClick={()=> {this.backgroundPosition(1)}} className="image-position position-1"></div>
                            <div style ={this.state.backgroundPosition === 3 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1ff"}: null} onClick={()=> {this.backgroundPosition(3)}} className="image-position position-3"></div>
                            <div style ={this.state.backgroundPosition === 2 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1ff"}: null} onClick={()=> {this.backgroundPosition(2)}} className="image-position position-2"></div>
                            <div style ={this.state.backgroundPosition === 4 ? {border: "2px solid black", height: "10px", width: "10px", backgroundColor: "#3DE1ff"}: null} onClick={()=> {this.backgroundPosition(4)}} className="image-position position-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}