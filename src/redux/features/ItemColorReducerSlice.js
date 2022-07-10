export const itemColorReducer = (state = {}, action) => {
    if (action.type === "ADD-COLOR") {
      return {
        ...state,
        id: action.payload.id,
        color: action.payload.color,
        title: action.payload.title,
      };
    }
  
    return state;
  };
  
  export const selectedColor = (newColorDiv) => {
    return {
      type: "ADD-COLOR",
      payload: {
        id: newColorDiv.id,
        color: newColorDiv.color,
        title: newColorDiv.title,
      },
    };
  };