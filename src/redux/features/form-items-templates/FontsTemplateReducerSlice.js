export const showFontsTemplateReducer = (state={}, action) => {
    if(action.type === "ADD-FONTS_TEMPLATE") {
        return {
            ...state,
            show: action.payload.show,
        }
    }
    if(action.type === "CLOSE-FONTS_TEMPLATE") {
        return {
            ...state,
            show: action.payload.show,
        }
    }

    return state;
}

export const initialFontsTemplateState = {
    show: false
}

export const fontsTemplateState = (state) => {
    return state.fontsTemplate.show
}

export const showFontsTemplateState = (status) => {
    return {
        type: "ADD-FONTS_TEMPLATE",
        payload: {
            show: status,
        }
    }
}

export const closeFontsTemplateState = (status) => {
    return {
        type: "CLOSE-FONTS_TEMPLATE",
        payload: {
            show: status,
        }
    }
}

