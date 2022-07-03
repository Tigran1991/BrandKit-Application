import { colorDivReducer } from "./ColorDivReducerSlice";

export const colorDivCollectionReducer = (state = [], action) => {
  if (action.type === "ADD_COLLECTION") {
    return [...state, colorDivReducer(undefined, action)];
  }

  return state;
}

export const selectedColorDivCollection = (state) => {
  return state.colorDivCollection;
}