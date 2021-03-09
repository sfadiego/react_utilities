import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
    return (<Router>
        <div className="row">
            <NavBar/>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/about" component={AboutScreen} />
                <Route exact path="/login" component={LoginScreen} />
                
                {/* el ultimo es el default - 404 component */}
                <Route component={LoginScreen} />
            </Switch>
        </div>
    </Router>)
}
