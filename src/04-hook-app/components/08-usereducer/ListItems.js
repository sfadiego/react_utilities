import React from 'react'
import './style.css'
export const ListItems = ({ item, index, toggleTodo, handleDelete }) => {
    return (
        <li className="list-group-item" >
            <span onClick={() => toggleTodo(item.id)} className={`${item.done && 'complete'}`}> {index + 1}. {item.descripcion}</span>
            <button onClick={() => handleDelete(item.id)} className="btn btn-danger"> - </button>
        </li>
    )
}
