import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app';
import logosTemplateReducer from '../features/logoTemplate';
import coloursTemplateReducer from '../features/coloursTemplate';
import fontsTemplateReducer from '../features/fontsTemplate';
import coloursTemplateItemReducer from '../features/coloursTemplateItems';
import colorPickerReducer from '../features/colorPicker';
import coloursReducer from '../features/colours';
import selectedColorReducer from '../features/selectedColor';
import collectionReducer from '../features/collection';
import collectionStatusReducer from '../features/collectionStatus';

const store = configureStore({
  reducer: {
    app: appReducer,
    logosTemplate: logosTemplateReducer,
    coloursTemplate: coloursTemplateReducer,
    fontsTemplate: fontsTemplateReducer,
    coloursItems: coloursTemplateItemReducer,
    colorPicker: colorPickerReducer,
    colours: coloursReducer,
    selectedColor: selectedColorReducer,
    collection: collectionReducer,
    isCollectionFull: collectionStatusReducer,
  },
})

export default store;

