import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../utils";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    collectionItems: {
      item: [],
      colours: [],
    },
  },
  reducers: {
    addCollectionItem: (state, action) => {
      state.collectionItems = {
        item: [...state.collectionItems.item, generateId()],
        colours: [...state.collectionItems.colours, action.payload],
      };
    },
  },
});

export const { addCollectionItem } = collectionSlice.actions;

export default collectionSlice.reducer;
