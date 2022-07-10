import { collectionsItemReducer } from "./ItemReducerSlice.js";

export const usersCollectionsReducer = (state = [], action) => {
  if (action.type === "ADD_COLLECTION") {
    return [...state, collectionsItemReducer(undefined, action)];
  }

  return state;
};

export const selectedCollections = (state) => {
  return state.collections;
};


