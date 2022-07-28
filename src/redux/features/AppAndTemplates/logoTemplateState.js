import { createSlice } from "@reduxjs/toolkit";

export const logosTemplateStateSlice = createSlice({
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

export const { logosTemplateCurrentState } = logosTemplateStateSlice.actions;

export default logosTemplateStateSlice.reducer;