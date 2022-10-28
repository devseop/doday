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
    date: '20221101',
  },
  {
    todoId: '2',
    title: 'Study DEV',
    date: '20220315',
  },
  {
    todoId: '3',
    title: 'test',
    date: '20221028',
  },
  {
    todoId: '4',
    title: 'Do-Day MVP Deployment',
    date: '20221101',
  },
  {
    todoId: '5',
    title: 'Study DEV',
    date: '20220315',
  },
  {
    todoId: '6',
    title: 'test',
    date: '20221028',
  },
  {
    todoId: '7',
    title: 'Do-Day MVP Deployment',
    date: '20221101',
  },
  {
    todoId: '8',
    title: 'Study DEV',
    date: '20220315',
  },
  {
    todoId: '9',
    title: 'test',
    date: '20221028',
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
