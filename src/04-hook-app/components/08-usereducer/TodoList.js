import React from 'react'
import { ListItems } from './ListItems'

export const TodoList = ({ todos, toggleTodo, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((item, index) => {
                    return <ListItems 
                    key={item.id} 
                    item={item} 
                    index={index} 
                    toggleTodo={toggleTodo} 
                    handleDelete={handleDelete}></ListItems>
                })
            }
        </ul>
    )
}
