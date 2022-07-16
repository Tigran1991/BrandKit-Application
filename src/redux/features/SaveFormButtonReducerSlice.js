export const saveFormButtonReducer = (state = {}, action) => {
  switch ("SHOW-BUTTON") {
    case action.type:
      return {
        ...state,
        isDisplay: action.payload.status,
      };

    default:
      return state;
  }
};

export const saveFormButtonInitialState = {
  isDisplay: false,
};

export const saveFormButtonCurrentState = (state) => {
  return state.saveFormButtonState.isDisplay;
};

export const saveFormButtonSelectedState = (selectedStatus) => {
  return {
    type: "SHOW-BUTTON",
    payload: {
      status: selectedStatus,
    },
  };
};
