import React, { Component } from "react"
import './Login.css'

export default class Login extends Component {
    state= {
        backgroundimg: ["https://i.pinimg.com/originals/88/d0/2e/88d02ef5f7814fdb0d73f521b5d86ad5.jpg","https://i.imgur.com/PpzXfFy.jpg"],
        backgroundPosition: 0
    }

    backgroundPosition (backgroundPosition) {
        this.setState({
            backgroundPosition
        })
    }

    render() {
        console.log(this.state.backgroundPosition)
        return (
            <div className="login-outer">
                <div className="login-upper">
                    <div className="login-inputs">
                        <h3 className="login-text">Login</h3>
                        <input type="text" />
                        <h3 className="login-text">Password</h3>
                        <input type="password" />
                        <h6 className="login-text">newuser ? <p >ClickHere</p></h6>
                    </div>
                </div>
                <div className="login-lower">
                    <div className="login-character-sheet-display">
                        <div style={{backgroundImage: `url(${this.state.backgroundimg[this.state.backgroundPosition]})`}} className="login-character-sheet-image"></div>
                        <div className="login-character-sheet-selection">
                            <div onClick={()=> {this.backgroundPosition(0)}} className="image-position position-0"></div>
                            <div onClick={()=> {this.backgroundPosition(1)}} className="image-position position-1"></div>
                            <div onClick={()=> {this.backgroundPosition(2)}} className="image-position position-2"></div>
                            <div onClick={()=> {this.backgroundPosition(3)}} className="image-position position-3"></div>
                            <div onClick={()=> {this.backgroundPosition(4)}} className="image-position position-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}