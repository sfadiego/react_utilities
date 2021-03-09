import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const {user} = useContext(AuthContext)
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <PublicRoute 
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={user.logged}
                    ></PublicRoute>
                    <PrivateRoute 
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={user.logged} >
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}
