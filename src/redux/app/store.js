import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { brandKitAppReducer, initialApp } from "../features/BrandKitAppReducerSlice.js";
import { usersCollectionsReducer } from "../features/UserCollectionsReducerSlice.js";
import { saveButtonReducer, initialSaveButtonState } from "../features/SaveButtonReducerSlice.js";
import { showLogoTemplateReducer, initialLogoTemplateState } from "../features/form-items-templates/LogoTemplateReducerSlice.js";
import { showColorTemplateReducer, initialColorTemplateState } from "../features/form-items-templates/ColorTemplateReducerSlice.js";
import { showFontsTemplateReducer, initialFontsTemplateState } from "../features/form-items-templates/FontsTemplateReducerSlice.js";
import { logosReducer } from "../features/logo-items/logosReducerSlice.js";
import { colorPickerReducer, initialColorPicker } from "../features/ColorPickerReducerSlice.js";
import { colorDivCollectionReducer } from "../features/ColorDivCollectionReducerSlice.js.js";
import { itemColorsReducer } from "../features/ItemColorsReducerSlice.js";
import { colorItemReducer } from "../features/ColorsItemReducerSlice.js";

const store = createStore(
  combineReducers({
    brandKitApp: brandKitAppReducer,
    saveButton: saveButtonReducer,
    collections: usersCollectionsReducer,
    logoTemplate: showLogoTemplateReducer,
    colorTemplate: showColorTemplateReducer,
    fontsTemplate: showFontsTemplateReducer,
    logos: logosReducer,
    colorPicker: colorPickerReducer,
    colorDivCollection: colorDivCollectionReducer,
    itemColors: itemColorsReducer,
    colors: colorItemReducer,
  }),
  {
    brandKitApp: initialApp,
    saveButton: initialSaveButtonState,
    logoTemplate: initialLogoTemplateState,
    colorTemplate: initialColorTemplateState,
    fontsTemplate: initialFontsTemplateState,
    colorPicker: initialColorPicker,
  },
  composeWithDevTools()
);

export default store;
