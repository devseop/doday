import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type cardType = {
  id: number;
  title: string;
  date: string;
  thumbnail: string;
};

const initialState: cardType = {
  id: 0,
  title: '',
  date: '',
  thumbnail: '',
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

let id = 0;
function getId() {
  return id++;
}

export const { setTitle, setDate } = cardSlice.actions;
export default cardSlice.reducer;
