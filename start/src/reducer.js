import { addTodo, removeTodo } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

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

createReducer(
  { todos: [] },
  {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos.splice(index);
    }
  }
);
