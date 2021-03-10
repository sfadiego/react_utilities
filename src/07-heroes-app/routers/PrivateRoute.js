import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes  from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...allRouteProps
}) => {
    localStorage.setItem('last_path', allRouteProps.location.pathname)
    return (
        <Route {...allRouteProps}
            component={(props) => (
                (isAuthenticated) ?
                    <Component {...props} />
                    : <Redirect to='/login'></Redirect>
            )}

        />
    )
}
PrivateRoute.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}