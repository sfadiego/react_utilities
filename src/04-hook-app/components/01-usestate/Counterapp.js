import React, { useState } from 'react'

export const Counterapp = () => {
    const [state, setstate] = useState({
        counter1: 10,
        counter2: 20,
    })

    const { counter1, counter2 } = state
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Contador1: {counter1}</h1>
                <h1>Contador2: {counter2}</h1>
                <hr></hr>
                <button onClick={() => setstate({ ...state, counter1: counter1 + 1 })} className="btn btn-primary"> +1</button>
            </div>
        </div>
    )
}
