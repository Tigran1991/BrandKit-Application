import { colorDivReducer } from "./ColorDivReducerSlice";

export const colorDivCollectionReducer = (state = [], action) => {
  if (action.type === "ADD-COLOR-DIV") {
    return [...state, colorDivReducer(undefined, action)];
  }
  if(action.type === 'DELETE_ITEM'){
    return state.filter(item => item.id !== action.payload.id)
  }

  return state;
}

export const selectedColorDivCollection = (state) => {
  return state.colorDivCollection;
}

export const addCollectionData = (collectionId) => {
  debugger
  return {
    type: 'DELETE_ITEM',
    payload: {
      id: collectionId,
    },
  };
}