export const itemsColorsReducer = (state = [], action) => {
  if (action.type === "ADD-COLORS") {
    return [...state, action.payload.color];
  }
  if (action.type === "RESET_COLORS_AFTER_SAVE") {
    return action.payload.colorDivState;
  }

  return state;
};

export const selectItemsColors = (state) => {
  return state.itemsColors;
};

export const selectedItemsColors = (newColor) => {
  return {
    type: "ADD-COLORS",
    payload: {
      color: newColor.color,
    },
  };
};

export const resetColorsAfterSave = (colorDiv) => {
  return {
    type: "RESET_COLORS_AFTER_SAVE",
    payload: {
      colorDivState: colorDiv,
    },
  };
};
