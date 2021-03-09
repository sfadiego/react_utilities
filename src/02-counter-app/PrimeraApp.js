//FC  - funcional components
import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ titulo, subtitulo}) => {

    const obj = {
        id: 1,
        nombre: 'diego armando',
        ap1: 'silva',
        ap2: 'facio'
    }
    const str = [1, 2, 3]

    return (
        <>
            <h1> {titulo}</h1>
            <h4>{subtitulo}</h4>
            <p>Hola {obj.nombre}</p>
            <p>{str}</p>
            <p>mi primera app </p>
        </>
    );
}

//valida los parametros de props
PrimeraApp.propTypes = {
    subtitulo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps ={
    titulo: 'soy un titulo por default',
    subtitulo: 'soy un subtitulo por default'
}

export default PrimeraApp;

//Fragment 
//pedazo de codigo para agrupar elementos
// <></> : esto es una abreviacion
