import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import './style.css'

//Valor inicial - para optimizar el reducer
const init = () => {
    // state inicial
    // return [{
    //     id: new Date().getTime(),
    //     descripcion: 'Aprender react',
    //     done: false
    // }]
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    //dispatch : manda llamar las funciones
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    // guarda los cambios en el state, al renderizar
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDelete = (id) => {
        const action = {
            type: 'delete',
            payload: id
        };

        dispatch(action)
    }

    const toggleTodo = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action)
    }

    return (
        <div className="row">
            <h1>Todo App <small>( {todos.length} )</small></h1>
            <div className="col-md-6">
                <hr />
                <TodoList todos={todos} handleDelete={handleDelete} toggleTodo={toggleTodo}></TodoList>
            </div>
            <div className="col-md-6">
                <TodoAdd
                    handleAddTodo={handleAddTodo}
                ></TodoAdd>
            </div>
        </div>
    )
}
