import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroeScreen } from '../components/heores/HeroeScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    
    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid mt-4">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/hero/:heroeId" component={HeroeScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
