import React from "react"
import {Route, Switch} from 'react-router-dom'
import Login from './Components/Authentication/Authentication.js'
import Home from "./Components/Home/Home"
import Random from "./Components/Random/Random.js"
import Preview from "./Components/Preview/Preview.js"

export default (
    <Switch>
        <Route component = {Login} path = "/" exact/>
        <Route component = {Home} path ="/home" />
        <Route component = {Random} path ="/random"/>
        <Route component = {Preview} path ="/preview"/>
    </Switch>
)