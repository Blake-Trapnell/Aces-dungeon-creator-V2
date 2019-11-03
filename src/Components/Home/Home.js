import React, {Component} from "react"
import "./Home.css"
import Header from "../Authentication/Header/Header.js"
import {Link} from "react-router-dom"
import Axios from "axios"
import {withRouter} from "react-router-dom"
import { setUser } from "../../ducks/reducer"
import {connect} from "react-redux"

 class Home extends Component {
state = {
    username: ""
}


componentWillMount(){
    Axios.get('/auth/user').then((res)=>{
        let user = res.data
            if(user.username === undefined) {
                return  this.props.history.push("/")
              }
        this.props.setUser(user)
        this.setState({
            username: user.username
        })
    })
}

    render() {
    return(
        <div className="home-outer">
            <Header/>
            <div className="help-notifications">   
                <div className="home-notifications">
                    {this.state.username ? <h1>Welcome: {this.state.username}</h1> : null}
                </div>
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
                    <Link className="random-creator" to = "/Random">
                        <h1>R.C</h1>
                        <h6 className="navigation-subtext">Random <p>Creator</p></h6>
                    </Link>
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
}
export default withRouter(connect(null, {setUser})(Home));