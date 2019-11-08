import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Nav from "./components/Nav"

const App = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    
                </Switch>
            </div>
        </Router>
    )
}