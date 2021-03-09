import React, { useState } from 'react';
import PropTypes from 'prop-types'


const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value); // retorna un arreglo con dos valores
    const handleClick = (e) => {
        setCounter(counter + 1); //son iguales 
        // setCounter((c) => c + 1); //son iguales
    }

    const handleReset =() =>  setCounter(value); 
    const handleRestar =() => setCounter(counter - 1); 

    return <>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>
        {/* con parentesis se ejecuta al cargar la pagina */}
        {/* sin parentesis se hace referencias */}
        <button onClick={handleClick}>agregar +1</button>
        <button onClick={handleReset}>Reset </button>
        <button onClick={handleRestar}>- 1</button>
    </>

}



CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;