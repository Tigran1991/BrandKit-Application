export const colorDivReducer = (state = {}, action) => {
  if (action.type === "ADD-COLOR-DIV") {
    return {
      ...state,
      id: action.payload.id,
    };
  }

  return state;
};

export const selectedColorDiv = (newColorDiv) => {
  return {
    type: "ADD-COLOR-DIV",
    payload: {
      id: newColorDiv.id,
    },
  };
};


