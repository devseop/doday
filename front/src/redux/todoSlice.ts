import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { standardDate } from "../components/TodoList";
import { ITodoItemProps } from "../components/TodoForm";

let nextId = 0;

export const todoSlice = createSlice({
  name: "todos",
  initialState: [] as ITodoItemProps[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: nextId,
        text: action.payload,
        created: dayjs(),
        isCompleted: false,
        today: standardDate,
      });
      nextId++;
    },

    editTodo: (
      state,
      action: PayloadAction<{ id: number; updatedText: string }>
    ) => {
      const { id, updatedText } = action.payload;

      /** [오류] TS2532: Object is possibly 'undefined' 를 없애기 위한 if 구문 활용.*/
      const targetTodo = state.find((todo) => todo.id === id);
      if (targetTodo) {
        targetTodo.text = updatedText;
      }
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      const idx = state.findIndex((todo) => todo.id === action.payload);
      state.splice(idx, 1);
    },

    completeTodo: (
      state,
      action: PayloadAction<{ id: number; isCompleted: boolean }>
    ) => {
      const { id, isCompleted } = action.payload;
      const targetTodo = state.find((todo) => todo.id === id);
      if (targetTodo) {
        targetTodo.isCompleted = isCompleted;
      }
    },
  },
});

export const { addTodo, editTodo, removeTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
