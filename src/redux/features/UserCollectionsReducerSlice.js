import { collectionsItemReducer } from "./ItemReducerSlice.js";

export const usersCollectionsReducer = (state = [], action) => {
  if (action.type === "ADD_COLLECTION") {
    return [...state, collectionsItemReducer(undefined, action)];
  }
  if(action.type === 'DELETE_ITEM'){
    return state.filter(item => item.id !== action.payload.id)
  }

  return state;
}

export const selectedCollections = (state) => {
  return state.collections;
}

export const addCollectionData = (collectionId) => {
  return {
    type: 'DELETE_ITEM',
    payload: {
      id: collectionId,
    },
  };
}



