export const colorReducer = (state = {}, action) => {
  if (action.type === "ADD-ITEM-COLOR") {
    return {
      ...state,
      color: action.payload.color,
    };
  }

  return state;
};

export const selectedItemColor = (newColor) => {
  return {
    type: "ADD-ITEM-COLOR",
    payload: {
      color: newColor.color,
    },
  };
};
