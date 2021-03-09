import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formvalues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        password: ''
    })

    const { nombre, email, password } = formvalues;

    useEffect(() => {
        console.log("email cambio a:", email)
    }, [email])

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formvalues)
    }

    return (
        <form onSubmit={submitForm} className="row">
            <div className="col-md-12">
                <h1>Form With Custom Hook</h1>
            </div>
            <div className="col-md-4">
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
            <div className="col-md-4">
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
            <div className="col-md-4">
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        className="form-control"
                        placeholder="password"
                        onChange={handleInputChange}
                        name="password"></input>
                </div>
            </div>
            <div className="col-md-12 mt-4">
                <button className=" btn btn-primary"> submit</button>
            </div>
        </form>
    )
}
