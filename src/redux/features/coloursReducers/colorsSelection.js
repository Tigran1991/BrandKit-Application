import { createSlice } from "@reduxjs/toolkit";

export const colorsSelectionSlice = createSlice({
  name: "colorsSelection",
  initialState: {
    colours: [],
  },
  reducers: {
    addColours: (state, action) => {
      state.colours = [...state.colours, action.payload];
    },
    saveColours: (state) => {
      state.colours = state.colours.filter((color) => color);
    },
    discardColours: (state) => {
      state.colours = [];
    },
  },
});

export const { addColours, saveColours, discardColours } =
  colorsSelectionSlice.actions;

export default colorsSelectionSlice.reducer;
