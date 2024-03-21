import { createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 123,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
    decrement: (state, { payload }) => {
      state.count -= payload;
    },
    reset: (state, { payload }) => {
      state.count = payload;
    },
  },
});

export default couterSlice.reducer;
export const { increment, decrement, reset } = couterSlice.actions;
