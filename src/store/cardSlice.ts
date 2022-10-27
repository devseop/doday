import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/index';

export interface CardItemType {
  cardId: string;
  title: string;
  date: string;
  thumbnail: any;
}

// 이미지 확장자
// console.log(fileImage?.slice(11, 14));
//<data>코드
// console.log(fileImage?.slice(22, fileImage?.length));

const initialState: CardItemType[] = [
  // {
  //   cardId: '1',
  //   title: 'Do-Day MVP Deployment',
  //   date: '20221120',
  //   thumbnail: '/Users/seop/Desktop/dev/doday/src/image/ye.png',
  // },
];

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardItemType>) => {
      const { title, date, thumbnail } = action.payload;
      const newCard = {
        cardId: new Date().getTime().toString(),
        title: title,
        date: date,
        thumbnail: thumbnail,
      };
      state.push(newCard);
    },
  },
});

export const selectCards = (state: RootState) => state.card;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
