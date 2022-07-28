import { createSlice } from "@reduxjs/toolkit";

export const colorPickerSlice = createSlice({
  name: "colorPicker",
  initialState: {
    isOpen: false,
  },
  reducers: {
    colorPickerCurrentState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { colorPickerCurrentState } = colorPickerSlice.actions;

export default colorPickerSlice.reducer;