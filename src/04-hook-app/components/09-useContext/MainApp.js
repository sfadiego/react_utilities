import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'
export const MainApp = () => {

    const [user, setuser] = useState({});
    return (
        // los elementos en value, son pasados a sus componentes hijos
        <UserContext.Provider value={{ user, setuser }}>
            <AppRouter></AppRouter>
        </UserContext.Provider>
    )
}
