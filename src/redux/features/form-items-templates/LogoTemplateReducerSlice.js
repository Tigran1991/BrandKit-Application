export const showLogoTemplateReducer = (state = {}, action) => {
  if (action.type === "ADD-LOGO_TEMPLATE") {
    return {
      ...state,
      show: action.payload.show,
    };
  }
  if (action.type === "CLOSE-LOGO_TEMPLATE") {
    return {
      ...state,
      show: action.payload.show,
    };
  }

  return state;
};

export const initialLogoTemplateState = {
  show: false,
};

export const logoTemplateState = (state) => {
  return state.logoTemplate.show;
};

export const showLogoTemplateState = (status) => {
  return {
    type: "ADD-LOGO_TEMPLATE",
    payload: {
      show: status,
    },
  };
};

export const closeLogoTemplateState = (status) => {
  return {
    type: "CLOSE-LOGO_TEMPLATE",
    payload: {
      show: status,
    },
  };
};
