import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log("me volvi a generar")
    return (
        <button className="btn btn-primary" onClick={() => increment(100)}>
            + 1
        </button>
    )
})
