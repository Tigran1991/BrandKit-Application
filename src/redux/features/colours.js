import { createSlice } from "@reduxjs/toolkit";

export const coloursSlice = createSlice({
  name: "colours",
  initialState: {
    colours: [],
  },
  reducers: {
    addColours: (state, action) => {
      state.colours = state.colours.concat(action.payload);
    },
    saveColours: (state) => {
      state.colours = state.colours.filter(color => color);
    },
    discardColours: (state) => {
      state.colours = [];
    }
  },
});

export const { addColours, saveColours, discardColours } = coloursSlice.actions;

export default coloursSlice.reducer;