import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { brandKitAppReducer, appInitialState } from "../features/BrandKitAppReducerSlice.js";
import { usersCollectionsReducer } from "../features/UserCollectionsReducerSlice.js";
import { saveFormButtonReducer, saveFormButtonInitialState } from "../features/SaveFormButtonReducerSlice.js";
import { showLogoTemplateReducer, initialLogoTemplateState } from "../features/form-items-templates/LogoTemplateReducerSlice.js";
import { showColorTemplateReducer, initialColorTemplateState } from "../features/form-items-templates/ColorTemplateReducerSlice.js";
import { showFontsTemplateReducer, initialFontsTemplateState } from "../features/form-items-templates/FontsTemplateReducerSlice.js";
import { logosReducer } from "../features/logo-items/logosReducerSlice.js";
import { colorDivCollectionReducer } from "../features/ColorDivCollectionReducerSlice.js.js";
import { itemColorsReducer } from "../features/ItemColorsReducerSlice.js";
import { colorsReducer } from "../features/ItemCollectionColors/ColorsReducerSlice.js.js";
import { itemsColorsReducer } from "../features/ItemCollectionColors/ItemsColorsReducerSlice.js";

const store = createStore(
  combineReducers({
    brandKitApp: brandKitAppReducer,
    saveFormButtonState: saveFormButtonReducer,
    collections: usersCollectionsReducer,
    logoTemplate: showLogoTemplateReducer,
    colorTemplate: showColorTemplateReducer,
    fontsTemplate: showFontsTemplateReducer,
    logos: logosReducer,
    colorDivCollection: colorDivCollectionReducer,
    itemColors: itemColorsReducer,
    colors: colorsReducer,
    itemsColors: itemsColorsReducer,
  }),
  {
    brandKitApp: appInitialState,
    saveButton: saveFormButtonInitialState,
    logoTemplate: initialLogoTemplateState,
    colorTemplate: initialColorTemplateState,
    fontsTemplate: initialFontsTemplateState,
  },
  composeWithDevTools()
);

export default store;
