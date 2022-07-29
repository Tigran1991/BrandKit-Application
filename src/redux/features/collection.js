import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../utils";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    collection: [],
  },

  reducers: {
    addCollectionItem: (state, action) => {
      state.collection = [
        ...state.collection,
        {
          id: generateId(),
          colours: action.payload,
          title: "Title",
        },
      ];
    },
  },
});

export const { addCollectionItem } = collectionSlice.actions;

export default collectionSlice.reducer;
