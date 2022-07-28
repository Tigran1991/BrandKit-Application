import { createSlice } from "@reduxjs/toolkit";

export const selectedColorSlice = createSlice({
  name: "selectedColor",
  initialState: {
    selectedColor: [],
  },
  reducers: {
    addSelectedColor: (state, action) => {
      const color = action.payload.filter(
        (color) => color === action.payload[action.payload.length - 1]
      );
      state.selectedColor = state.selectedColor.concat(color);
    },
    discardSelectedColor: (state) => {
      state.selectedColor = [];
    },
  },
});

export const { addSelectedColor, discardSelectedColor } =
  selectedColorSlice.actions;

export default selectedColorSlice.reducer;
