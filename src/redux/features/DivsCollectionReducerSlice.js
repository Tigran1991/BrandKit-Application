import { colorDivReducer } from "./DivReducerSlice";

export const colorDivCollectionReducer = (state = [], action) => {
  if (action.type === "ADD-COLOR-DIV") {
    return [...state, colorDivReducer(undefined, action)];
  }
  if (action.type === "DELETE_ITEM") {
    return state.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "RESET_COLORS") {
    return action.payload.colorDivState;
  }
  if (action.type === "RESET_AFTER_SAVE") {
    return action.payload.colorDivState;
  }

  return state;
};

export const selectedColorDivCollection = (state) => {
  return state.colorDivCollection;
};

export const addCollectionData = (collectionId) => {
  return {
    type: "DELETE_ITEM",
    payload: {
      id: collectionId,
    },
  };
};

export const resetColors = (colorDiv) => {
  return {
    type: "RESET_COLORS",
    payload: {
      colorDivState: colorDiv,
    },
  };
};

export const resetAfterSave = (colorDiv) => {
  return {
    type: "RESET_AFTER_SAVE",
    payload: {
      colorDivState: colorDiv,
    },
  };
};
