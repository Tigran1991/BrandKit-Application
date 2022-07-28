import { createSlice } from "@reduxjs/toolkit";

export const coloursTemplateSlice = createSlice({
  name: "coloursTemplate",
  initialState: {
    isOpen: false,
  },
  reducers: {
    coloursTemplateCurrentState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { coloursTemplateCurrentState } = coloursTemplateSlice.actions;

export default coloursTemplateSlice.reducer;
