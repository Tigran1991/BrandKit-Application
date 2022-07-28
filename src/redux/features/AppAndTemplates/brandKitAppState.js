import { createSlice } from "@reduxjs/toolkit";

export const brandKitAppStateSlice = createSlice({
  name: "brandKitApp",
  initialState: {
    isOpen: false,
  },
  reducers: {
    brandKitAppCurrentState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { brandKitAppCurrentState } = brandKitAppStateSlice.actions;

export default brandKitAppStateSlice.reducer;
