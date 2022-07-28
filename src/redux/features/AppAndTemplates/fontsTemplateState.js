import { createSlice } from "@reduxjs/toolkit";

export const fontsTemplateStateSlice = createSlice({
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

export const { fontsTemplateCurrentState } = fontsTemplateStateSlice.actions;

export default fontsTemplateStateSlice.reducer;
