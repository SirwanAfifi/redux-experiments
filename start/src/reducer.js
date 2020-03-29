import { addTodo, removeTodo } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

export default createReducer(
  { todos: [] },
  {
    [addTodo.type]: (state, action) => {
      state.todos.push(action.payload);
    },
    [removeTodo.type]: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos.splice(index);
    }
  }
);
