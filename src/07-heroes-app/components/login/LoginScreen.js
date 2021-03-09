import React, {  useContext } from 'react'
import { types } from '../../types/types'
import { AuthContext } from '../../auth/AuthContext'

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext)
    // const [state, dispatch] = useReducer(authReducer, {})
    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                id: 1,
                name: "Diego armando silva facio"
            }
        })
        history.replace('/')
    }
    return (
        <div className="container mt-5">
            <h1>Login screen</h1>
            <hr></hr>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    )
}
