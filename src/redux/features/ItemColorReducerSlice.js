export const itemColorReducer = (state = {}, action) => {
  if (action.type === "ADD-ITEM") {
    return {
      ...state,
      id: action.payload.id,
      title: action.payload.title,
      color: action.payload.color,
    };
  }

  return state;
};

export const selectedItem = (newColorDiv) => {
  return {
    type: "ADD-ITEM",
    payload: {
      id: newColorDiv.id,
      title: newColorDiv.title,
      color: newColorDiv.color,
    },
  };
};
