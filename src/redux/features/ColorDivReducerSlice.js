export const colorDivReducer = (state = {}, action) => {
  if (action.type === "ADD-COLOR-DIV") {
    return {
      ...state,
      id: action.payload.id,
      color: action.payload.color,
    };
  }

  return state;
};

export const selectedColorDiv = (newColorDiv) => {
  return {
    type: "ADD-COLOR-DIV",
    payload: {
      id: newColorDiv.id,
      color: newColorDiv.color,
    },
  };
};
