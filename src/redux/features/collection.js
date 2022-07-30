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
    changeCollectionTitle: (state, action) => {
      state.collection.filter((id) => {
        if (id.id === action.payload.id) {
          id.title = action.payload.title;
        }
      });
    },
  },
});

export const { addCollectionItem, changeCollectionTitle } =
  collectionSlice.actions;

export default collectionSlice.reducer;
