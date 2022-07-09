export const collectionsItemReducer = (state = {}, action) => {
  if (action.type === "ADD_COLLECTION") {
    return {
      ...state,
      id: action.payload.id,
      color: action.payload.color,
    };
  }

  return state;
};

export const selectedItem = (itemData) => {
  return {
    type: "ADD_COLLECTION",
    payload: {
      id: itemData.id,
      color: itemData.color,
    },
  };
};
