import { createSlice } from "@reduxjs/toolkit";

export const coloursTemplateStateSlice = createSlice({
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

export const { coloursTemplateCurrentState } =
  coloursTemplateStateSlice.actions;

export default coloursTemplateStateSlice.reducer;
