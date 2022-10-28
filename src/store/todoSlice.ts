import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface Todo {
  todoId: string;
  title: string;
  date: string;
}

const initialState: Todo[] = [
  {
    todoId: '1',
    title: 'Do-Day MVP Deployment',
    date: '20221120',
  },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const { title, date } = action.payload;
      const newTodo = {
        todoId: new Date().getTime().toString(),
        title: title,
        date: date,
      };
      state.push(newTodo);
    },
  },
});

export const selectTodos = (state: RootState) => state.todo;
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
