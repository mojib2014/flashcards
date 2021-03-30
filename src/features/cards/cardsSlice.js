import { createSlice } from "@reduxjs/toolkit";

// Action and Reducer creator
const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cares: {},
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards = { ...state.cards, [id]: { front, back } };
    },
  },
});

// Exportin Reducer and Action creators
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;

// Slice selector
export const selectCards = (state) => state.cards.cards;
