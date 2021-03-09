import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { state, incrementar, decrementar, reset } = useCounter(100);
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Counter with hook {state}</h1>
                <button onClick={() => incrementar(2)} className="btn btn-primary"> incrementar</button>
                <button onClick={() => decrementar(2)} className="btn btn-danger"> decrementar</button>
                <button onClick={reset} className="btn btn-warning"> reset</button>
            </div>
        </div>
    )
}
