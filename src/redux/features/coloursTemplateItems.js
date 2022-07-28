import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../utils";

const initialState = {
  coloursItems: [],
};

export const coloursTemplateItemSlice = createSlice({
name: "coloursTemplateItems",
initialState,
  reducers: {
    addColorItem: (state) => {
      state.coloursItems = state.coloursItems.concat(generateId());
    },
    saveColorItems: (state) => {
      state.coloursItems = initialState.coloursItems;
    }
  },
});

export const { addColorItem, saveColorItems } = coloursTemplateItemSlice.actions;

export default coloursTemplateItemSlice.reducer;