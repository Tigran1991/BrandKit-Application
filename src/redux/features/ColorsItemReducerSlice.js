import { colorReducer } from "./colorReducerSlice";

export const colorItemReducer = (state = [], action) => {
  if (action.type === "ADD-ITEM-COLOR") {
    return [...state, colorReducer(undefined, action)];
  }

  return state;
};

export const selectedColorItems = (state) => {
  return state.colors;
};




