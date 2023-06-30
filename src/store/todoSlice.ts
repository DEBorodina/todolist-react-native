import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ITodo } from '../../types';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as ITodo[],
  },
  reducers: {
    AddToDo(state, action: PayloadAction<string>) {
      const newTodo = {
        text: action.payload,
        id: Date.now(),
        isDone: false,
      };
      state.todos.push(newTodo);
    },

    DeleteToDo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },

    DoneToDo(state, action: PayloadAction<number>) {
      const todo = state.todos.find(({ id }) => id === action.payload)!;
      todo.isDone = !todo.isDone;
    },
  },
});

export const { AddToDo, DeleteToDo, DoneToDo } = todoSlice.actions;
export default todoSlice.reducer;
