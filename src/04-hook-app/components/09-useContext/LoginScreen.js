import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = ({ }) => {
    const { setuser } = useContext(UserContext)
    return (
        <div>
            <h1>Login screen</h1>
            <button onClick={() => {
                setuser({
                    id: 1,
                    nombre: 'diego armando',
                    email: 'sfadiego@gmail.com'
                })
            }} className="btn btn-primary"> Login</button>
        </div>
    )
}
