import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteColorsDivItem } from "../../../../redux/features/ColorDivCollectionReducerSlice.js";

import "./Color.css";

const ColorDiv = memo((props) => {
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
          dispatch(deleteColorsDivItem(ID));
        }}
      >
        X
      </button>
    </div>
  );
});

export default ColorDiv;
