import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategoriesProps }) => {

    const [inputValue, setinputValue] = useState('')
    const handleEvent = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmith = (e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
            setCategoriesProps(value => [...[],inputValue])//[inputValue, ...value]
            setinputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmith}>
            <input
                type='text'
                value={inputValue}
                onChange={handleEvent}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategoriesProps: PropTypes.func.isRequired
}