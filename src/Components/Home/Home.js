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
                    {/* <button className="home-logout-button">out</button>
                    <button className="home-help-button">Help</button> */}
                    
                    </div>    
            </div>
            <div className="home-main">
                <div className="home-navigation">
                    <div className="adventure-league">
                        <h1 >A.L.</h1>
                        <h6 className="navigation-subtext">Adventure <p>League</p></h6>
                    </div>
                    <div className="random-creator">
                        <h1>R.C</h1>
                        <h6 className="navigation-subtext">Random <p>Creator</p></h6>
                    </div>
                    <div className="custom-create">
                        <h1>C.C</h1>
                        <h6 className="navigation-subtext">Custom <p>Create</p></h6>
                    </div>
                </div>
                <div className="home-main-display">
                    <div className="home-sheets-display"></div>
                    <div className="fun-fact">
                        <div className="did-you-know">
                        <h1>Did you know?</h1>
                        </div>
                        <div className="home-information">
                        <h4>Barbarians use Strength as their main stat</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}