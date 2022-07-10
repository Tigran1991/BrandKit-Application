import React from "react";
import { useDispatch } from "react-redux";
import { addCollectionData } from "../../../../redux/features/UserCollectionsReducerSlice";
import { deleteItemsColor } from "../../../../redux/features/ItemColorsReducerSlice";

import "./Color.css";

const ColorDiv = (props) => {
  const dispatch = useDispatch();
  const ID = props.colorItemData.id;

  return (
    <div
      className="added-colors"
      style={{ backgroundColor: props.colorItemData.color }}
    >
      <button
        className="delete-item"
        onClick={() => {
          dispatch(addCollectionData(ID));
          dispatch(deleteItemsColor(ID + 'itemColors'));
        }}
      >
        X
      </button>
    </div>
  );
};

export default ColorDiv;
