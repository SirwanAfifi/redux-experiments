import { addTodo, removeTodo } from "./actions";

export default function reducer(state = { todos: [] }, action) {
  switch (action.type) {
    case addTodo.type:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case removeTodo.type:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}
