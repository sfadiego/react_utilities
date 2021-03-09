import React from 'react'
import PropTypes from "prop-types";
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...restProps
}) => {
    return (
        <Route 
            {...restProps}
            component={(props)=>(
                (!isAuthenticated) ? <Component {...props}></Component> : <Redirect to="/"></Redirect>
            )}
        />
    )
}

PublicRoute.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}