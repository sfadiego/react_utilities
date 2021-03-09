import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    // const UserContext = useContext
    const { user } = useContext(UserContext)
    return (
        <div>
            <h1>Home screen</h1>
            <hr></hr>
            <div>
                {JSON.stringify(user, null, 3)}
            </div>
        </div>
    )
}
