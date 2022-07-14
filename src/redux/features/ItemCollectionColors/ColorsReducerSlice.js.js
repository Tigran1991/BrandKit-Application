import { colorReducer } from "./ColorReducerSlice";

export const colorsReducer = (state = [], action) => {
  if (action.type === "ADD-COLOR") {
    return [...state, colorReducer(undefined, action)];
  }

  return state;
};

export const selectedColors = (state) => {
  return state.colors;
};