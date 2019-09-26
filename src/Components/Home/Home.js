import React from "react"
import "./Home.css"
import Header from "../Authentication/Header/Header.js"

export default function Home() {
    return(
        <div className="home-outer">
            <Header/>
            <div className="help-notifications">   
                <div className="home-notifications"></div>
                <div className="home-help">
                    <button className="home-help-button">Help</button>
                    
                    </div>    
            </div>
            <div className="home-main">
                <div className="home-navigation"></div>
                <div className="home-main-display"></div>
            </div>
        </div>
    )
}