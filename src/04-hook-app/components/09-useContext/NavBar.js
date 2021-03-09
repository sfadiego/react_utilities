import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Usecontext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/">
                        Home <span className="sr-only"></span>
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
