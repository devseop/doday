import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodoListProps } from "../components/TodoList";
import dayjs from "dayjs";
import { standardDate } from "../components/TodoList";

let nextId = 0;
const initialState = [] as ITodoListProps[];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // console.log("addTodo");
      state.push({
        id: nextId,
        text: action.payload,
        created: dayjs(),
        isCompleted: false,
        today: standardDate,
      });
      nextId++;
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      const idx = state.findIndex((todo) => todo.id === action.payload);
      state.splice(idx, 1);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
