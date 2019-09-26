import React from "react"
import {Route, Switch} from 'react-router-dom'
import Login from './Components/Authentication/Authentication.js'
import Home from "./Components/Home/Home"

export default (
    <Switch>
        <Route component = {Login} path = "/" exact/>
        <Route component = {Home} path ="/home" />
    </Switch>
)