import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { brandKitAppReducer, initialApp } from "../features/BrandKitAppReducerSlice.js";
import { usersCollectionsReducer } from "../features/UserCollectionsReducerSlice.js";
import { saveButtonReducer, initialSaveButtonState } from "../features/SaveButtonReducerSlice.js";
import { showLogoTemplateReducer, initialLogoTemplateState } from "../features/form-items-templates/LogoTemplateReducerSlice.js";
import { showColorTemplateReducer, initialColorTemplateState } from "../features/form-items-templates/ColorTemplateReducerSlice.js";
import { showFontsTemplateReducer, initialFontsTemplateState } from "../features/form-items-templates/FontsTemplateReducerSlice.js";


const store = createStore(
  combineReducers({
    brandKitApp: brandKitAppReducer,
    saveButton: saveButtonReducer,
    collections: usersCollectionsReducer,
    logoTemplate: showLogoTemplateReducer,
    colorTemplate: showColorTemplateReducer,
    fontsTemplate: showFontsTemplateReducer,
  }),
  {
    brandKitApp: initialApp,
    saveButton: initialSaveButtonState,
    logoTemplate: initialLogoTemplateState,
    colorTemplate: initialColorTemplateState,
    fontsTemplate: initialFontsTemplateState,
  },
  composeWithDevTools()
);

export default store;
