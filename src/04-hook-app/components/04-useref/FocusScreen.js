import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputref = useRef()
    const handleclick = ()=>{
        //pone el focus en el input seleccionado
        inputref.current.select();
        console.log(inputref)
        // lo mismo pero con javascript puro
        // document.querySelector('input').select();
    }

    return (
        <div className="row">
            <h1>Focus screen</h1>

            <input ref={inputref} type="text" className="form-control" placeholder="texto"></input>
            <button className="btn btn-primary mt-5" onClick={handleclick}>Click </button>
        </div>
    )
}
