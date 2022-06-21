import { createSlice } from "@reduxjs/toolkit";
import react from "react";

export const amountSlice = createSlice({
  name: "amount",
  initialState: {
    spent: 0,
    remaining: 0,
  },
  reducers: {
    setSpent: (state, action) => {
      state.spent += action.payload;
    },
    setRemaining: (state, action) => {
      state.remaining += action.payload;
    },
  },
});

export const { setSpent, setRemaining } = amountSlice.actions;
export default amountSlice.reducer;
