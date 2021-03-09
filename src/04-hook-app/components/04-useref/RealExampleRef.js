import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const [show, setshow] = useState(false)
    return (
        <div className="row">
            <div className="col-12">
                <h1> Real uso Useref</h1>
            </div>
            <hr></hr>
            {
                show && (

                    <div className="col-12">
                        <MultipleCustomHooks></MultipleCustomHooks>
                    </div>
                )

            }
            <div className="col-md-12 mt-4">
                <button className="btn btn-primary" onClick={()=>setshow(!show)}> Show / Hide </button>
            </div>
        </div>
    )
}
