import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_ITEM} from './actionsTypes';
let nextTodoId = 0
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
})


export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});


export const deleteItem = ( id ) => {
    return{
        type: DELETE_ITEM,
        payload:{ id }
    }
}
export default addTodo;