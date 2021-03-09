import React, { useState, useCallback, useEffect } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10);

    // Devuelve un callback memorizado.
    //va a monitorear si el valor cambia y se renderiza -> counter
    const increment = useCallback((num) => {
        //funcion a ejecutar
        setcounter((data) => data + num)
    }, [setcounter])

    useEffect(() => {
        // ??
    }, [increment])

    return (
        <div className="row">
            <h1>Usecallback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment}></ShowIncrement>
        </div>
    )
}
