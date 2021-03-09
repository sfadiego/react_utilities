import React from 'react'

//Memo se usa para evitar que se recargue 
//el componente si la informacion no ha cambiado
export const Counter = React.memo(({ value }) => {
    console.log("me llame de nuevo :c ")
    return (
        <small>
            {value}
        </small>
    )
}
)