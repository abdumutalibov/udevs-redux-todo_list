import { ADD_TODO, DELETE_ITEM, TOGGLE_TODO } from "../actionsTypes";
import { todo } from '../../components/Todo'
const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todos: [...state.todos, { content, complete: false, id }],
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );
      return { todos };
    }
    case DELETE_ITEM :
      return state.filter((elm, id) => id !== action.payload)

    default: {
      return state;
    }
  }
};
export default todos;
