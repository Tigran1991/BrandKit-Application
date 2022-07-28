import { createSlice } from "@reduxjs/toolkit";

export const logosTemplateSlice = createSlice({
  name: "logoTemplate",
  initialState: {
    isOpen: false,
  },
  reducers: {
    logosTemplateCurrentState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { logosTemplateCurrentState } = logosTemplateSlice.actions;

export default logosTemplateSlice.reducer;