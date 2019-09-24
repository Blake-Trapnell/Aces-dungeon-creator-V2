import React from "react"
import {Route, Switch} from 'react-router-dom'
import Login from './Components/Login/login.js'

export default (
    <Switch>
        <Route component = {Login} path = "/" exact/>
    </Switch>
)