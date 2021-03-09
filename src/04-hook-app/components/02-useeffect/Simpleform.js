import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const Simpleform = () => {
    const [formstate, setformstate] = useState({
        nombre: '',
        email: ''
    })

    const { nombre, email } = formstate

    useEffect(() => {
        // console.log("hola")
    }, [])

    useEffect(() => {
        // console.log("email cambio")
    }, [email])

    useEffect(() => {
        // console.log("formstate cambio")
    }, [formstate])

    const handleInputChange = ({ target }) => {
        const valor = target.value
        setformstate({ ...formstate, [target.name]: valor })
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Useffect</h1>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <input
                        type="text"
                        value={nombre}
                        className="form-control"
                        autoComplete="off"
                        placeholder="tu nombre"
                        onChange={handleInputChange}
                        name="nombre"></input>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <input
                        type="text"
                        value={email}
                        className="form-control"
                        autoComplete="off"
                        placeholder="tu email"
                        onChange={handleInputChange}
                        name="email"></input>
                </div>
            </div>
            {(nombre === '123') && <Message></Message>}
        </div>
    )
}
