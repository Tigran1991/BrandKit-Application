import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/AppAndTemplates/brandKitAppState";
import logosTemplateReducer from "../features/AppAndTemplates/logoTemplateState";
import coloursTemplateReducer from "../features/AppAndTemplates/coloursTemplateState";
import fontsTemplateReducer from "../features/AppAndTemplates/fontsTemplateState";
import colourstemplateItemsReducer from "../features/coloursReducers/coloursTemplateItems";
import colorsSelectionReducer from "../features/coloursReducers/colorsSelection";
import selectedColorReducer from "../features/coloursReducers/selectedColor";
import collectionReducer from "../features/collection";
import collectionStatusReducer from "../features/AppAndTemplates/collectionAreaState";

const store = configureStore({
  reducer: {
    app: appReducer,
    logosTemplate: logosTemplateReducer,
    coloursTemplate: coloursTemplateReducer,
    fontsTemplate: fontsTemplateReducer,
    coloursTemplateItems: colourstemplateItemsReducer,
    colours: colorsSelectionReducer,
    selectedColor: selectedColorReducer,
    collection: collectionReducer,
    isCollectionFull: collectionStatusReducer,
  },
});

export default store;
