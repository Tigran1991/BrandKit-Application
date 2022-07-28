import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpen: false,
  },
  reducers: {
    appCurrentState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { appCurrentState } = appSlice.actions;

export default appSlice.reducer;
