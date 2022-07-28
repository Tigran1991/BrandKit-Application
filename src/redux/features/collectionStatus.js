import { createSlice } from "@reduxjs/toolkit";

export const collectionStatusSlice = createSlice({
  name: "collectionStatus",
  initialState: {
    isCollectionFull: false,
  },
  reducers: {
    collectionCurrentStatus: (state) => {
      state.isCollectionFull = true;
    },
  },
});

export const { collectionCurrentStatus } = collectionStatusSlice.actions;

export default collectionStatusSlice.reducer;