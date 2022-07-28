import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../../utils";

const initialState = {
  coloursTemplateItems: {
    itemId: [],
  },
};

export const coloursTemplateItemsSlice = createSlice({
  name: "coloursTemplateItems",
  initialState,
  reducers: {
    addColoursTemplateItem: (state) => {
      state.coloursTemplateItems = {
        itemId: [...state.coloursTemplateItems.itemId, generateId()],
      };
    },
    saveColorItems: (state) => {
      state.coloursTemplateItems = initialState.coloursTemplateItems;
    },
  },
});

export const { addColoursTemplateItem, saveColorItems } =
  coloursTemplateItemsSlice.actions;

export default coloursTemplateItemsSlice.reducer;
