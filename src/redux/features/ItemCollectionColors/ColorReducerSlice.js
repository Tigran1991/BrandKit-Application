export const colorReducer = (state = {}, action) => {
    if (action.type === "ADD-COLOR") {
      return {
        ...state,
        color: action.payload.color,
      };
    }
  
    return state;
  };
  
  export const selectedItemColors = (newColor) => {
    return {
      type: "ADD-COLOR",
      payload: {
        color: newColor.color,
      },
    };
  };