import React from "react"
import {Route, Switch} from 'react-router-dom'
import Login from './Components/Authentication/Authentication.js'
import Home from "./Components/Home/Home"
import Random from "./Components/Random-Creator/Random.js"

export default (
    <Switch>
        <Route component = {Login} path = "/" exact/>
        <Route component = {Home} path ="/home" />
        <Route Component = {Random} path ="/Random-Creator"/>
    </Switch>
)