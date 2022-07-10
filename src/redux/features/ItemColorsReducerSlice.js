import { itemColorReducer } from "./ItemColorReducerSlice";

export const itemColorsReducer = (state = [], action) => {
  if (action.type === "ADD-COLOR") {
    return [...state, itemColorReducer(undefined, action)];
  }
  if (action.type === "DELETE_ITEMS_COLOR") {
    return state.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "RESET_ITEM_COLORS") {
    return action.payload.colorDivState;
  }

  return state;
};

export const selectedColorsForItem = (state) => {
  return state.itemColors;
};

export const resetAfterDeleteItem = (colorDiv) => {
  return {
    type: "RESET_ITEM_COLORS",
    payload: {
      colorDivState: colorDiv,
    },
  };
};

export const deleteItemsColor = (collectionId) => {
  return {
    type: "DELETE_ITEMS_COLOR",
    payload: {
      id: collectionId,
    },
  };
};



