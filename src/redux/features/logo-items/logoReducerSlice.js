export const logoReducer = (state={}, action) => {
  if (action.type === "ADD-LOGO") {
    return {
      ...state,
      id: action.payload.id,
      size: action.payload.size,
      image: action.type.image,
    };
  }

  return state;
}

export const selectedLogo = (newLogo) => {
  return {
    type: "ADD-LOGO",
    payload: {
      id: newLogo.id,
      image: newLogo.image,
    },
  };
}