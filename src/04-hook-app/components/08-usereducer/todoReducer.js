
//funcion que indica que accion ejecutar
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload]
            // break;
        case 'delete':
            return state.filter(todo => todo.id !== action.payload)
            // break;
        case 'toggle':
            return state.map(todo => {
               return  (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo
            })
            // break;
        default: return state
    }
}
