export const brandKitAppReducer = (state = {}, action) => {
  switch ("OPEN-APP") {
    case action.type:
      return {
        ...state,
        isOpen: action.payload.status,
      };

    default:
      return state;
  }
};

export const appInitialState = {
  isOpen: false,
};

export const brandKitAppState = (state) => {
  return state.brandKitApp.isOpen;
};

export const appSelectedState = (selectedStatus) => {
  return {
    type: "OPEN-APP",
    payload: {
      status: selectedStatus,
    },
  };
};
