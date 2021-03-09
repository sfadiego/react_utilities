// console.log("Hola mundo")
const inicial_state = [{
    id: 1,
    todo: "Comprar TV",
    done: false
}]

const todoreducer = (state = inicial_state, action) => {
    if (action?.type == 'agregar') {
        return [...state, action.payload]
    }
    return state
}

let toDo = todoreducer();

const newToDo = [{
    id: 2,
    todo: "Comprar Leche",
    done: false
}]
// console.log(todos)
const agregarTodoAction = {
    type: 'agregar',
    payload: newToDo
}

toDo = todoreducer(toDo, agregarTodoAction);
console.log(toDo)