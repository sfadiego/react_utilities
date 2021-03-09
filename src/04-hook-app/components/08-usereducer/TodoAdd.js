import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ descripcion }, handleInputChange, reset] = useForm({
        descripcion: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (descripcion.trim().length <= 1) { return; }

        const newTodo = {
            id: new Date().getTime(),
            descripcion: descripcion,
            done: false
        }

        handleAddTodo(newTodo)
        reset()
    }

    return (
        <>
            <h4>Agregar TODO </h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    name="descripcion"
                    value={descripcion}
                    placeholder="aprender..."
                    autoComplete="off"></input>
                <button className="btn btn-primary col-md-12 mt-3"> agregar </button>
            </form>
        </>
    )
}
