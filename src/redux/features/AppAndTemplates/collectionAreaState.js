import { createSlice } from "@reduxjs/toolkit";

export const collectionAreaStateSlice = createSlice({
  name: "collectionArea",
  initialState: {
    isCollectionFull: false,
  },
  reducers: {
    collectionAreaCurrentState: (state) => {
      state.isCollectionFull = true;
    },
  },
});

export const { collectionAreaCurrentState } = collectionAreaStateSlice.actions;

export default collectionAreaStateSlice.reducer;
