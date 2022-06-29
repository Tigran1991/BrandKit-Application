export const saveButtonReducer = (state={}, action) => {
    if(action.type === "ADD_COLLECTIONS_STORAGE") {
        return {
            ...state,
            saveButtonState: action.payload.saveButtonState,
        }
    }

    return state;
}

export const initialSaveButtonState = {
    saveButtonState: false
}

export const selectSaveButtonState = (state) => {
    return state.saveButton.saveButtonState;
}

export const selectedSaveButtonState = (status) => {
    return {
        type: "ADD_COLLECTIONS_STORAGE",
        payload: {
            saveButtonState: status,
        }
    }
}