export const showColorTemplateReducer = (state = {}, action) => {
  if (action.type === "ADD-COLOR_TEMPLATE") {
    return {
      ...state,
      show: action.payload.show,
    };
  }
  if (action.type === "CLOSE-COLOR_TEMPLATE") {
    return {
      ...state,
      show: action.payload.show,
    };
  }

  return state;
};

export const initialColorTemplateState = {
  show: false,
};

export const colorTemplateState = (state) => {
  return state.colorTemplate.show;
};

export const showColorTemplateState = (status) => {
  return {
    type: "ADD-COLOR_TEMPLATE",
    payload: {
      show: status,
    },
  };
};

export const closeColorTemplateState = (status) => {
  return {
    type: "CLOSE-COLOR_TEMPLATE",
    payload: {
      show: status,
    },
  };
};
