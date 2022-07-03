export const colorPickerReducer = (state={}, action) => {
    if(action.type === "ADD-COLOR_PICKER") {
        return {
            ...state,
            app: action.payload.app,
        }
    }

    return state;
}

export const initialColorPicker = {
    app: false
}

export const selectColorPickerState = (state) => {
    return state.colorPicker.app
}

export const colorPickerSelectedState = (status) => {
    return {
        type: "ADD-COLOR_PICKER",
        payload: {
            app: status,
        }
    }
}

