export const brandKitAppReducer = (state={}, action) => {
    if(action.type === "ADD-APP") {
        return {
            ...state,
            app: action.payload.app,
        }
    }

    return state;
}

export const initialApp = {
    app: false
}

export const selectBrandKitAppState = (state) => {
    return state.brandKitApp.app
}

export const appSelectedState = (status) => {
    return {
        type: "ADD-APP",
        payload: {
            app: status,
        }
    }
}

