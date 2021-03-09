import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Counter } from './Counter'

export const Memorize = () => {
    const { counter, incrementar } = useCounter()
    const [show, setshow] = useState(false)
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Contador <Counter value={counter}></Counter> </h1>
                <button className="btn btn-primary " onClick={()=>incrementar()}> + 1 </button>
                <button className="btn btn-success " onClick={()=>setshow(!show)}> Show / Hide {JSON.stringify(show)} </button>
            </div>
        </div>
    )
}
