import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {
    const { counter, incrementar } = useCounter(500)
    const [show, setshow] = useState(false)
    
    const procesoPesado = (inicial_value) => {
        for (let index = 0; index < inicial_value; index++) {
            console.log("aqui vamos ... ")
        }
        return `${inicial_value} : iteraciones realizadas.`
    }

    const memoprocesopesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Contador <small>{counter}</small> </h1>
                <p>
                    {
                        memoprocesopesado
                    }
                </p>
                <hr />
                <button className="btn btn-primary " onClick={() => incrementar()}> + 1 </button>
                <button className="btn btn-success " onClick={() => setshow(!show)}> Show / Hide {JSON.stringify(show)} </button>
            </div>
        </div>
    )
}
