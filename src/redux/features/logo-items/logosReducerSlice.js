import { logoReducer } from "./logoReducerSlice";

export const logosReducer = (state = [], action) => {
  if (action.type === "ADD-LOGO") {
    return [...state, logoReducer(undefined, action)];
  }

  return state;
}

export const selectedLogos = (state) => {
  return state.logos;
}