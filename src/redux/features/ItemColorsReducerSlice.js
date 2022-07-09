import { colorDivReducer } from "./DivReducerSlice";

export const itemColorsReducer = (state = [], action) => {
  if (action.type === "ADD-COLOR") {
    return [...state, colorDivReducer(undefined, action)];
  }


  return state;
};

export const selectedColorsForItem = (state) => {
  return state.itemColors;
};


