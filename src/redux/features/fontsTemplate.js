import { createSlice } from "@reduxjs/toolkit";

export const fontsTemplateSlice = createSlice({
  name: "fontsTemplate",
  initialState: {
    isOpen: false,
  },
  reducers: {
    fontsTemplateCurrentState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { fontsTemplateCurrentState } = fontsTemplateSlice.actions;

export default fontsTemplateSlice.reducer;