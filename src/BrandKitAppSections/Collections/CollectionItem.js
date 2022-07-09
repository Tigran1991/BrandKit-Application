import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../App.css";
import { addCollectionData } from "../../redux/features/UserCollectionsReducerSlice";
import { selectedColorDivCollection } from "../../redux/features/DivsCollectionReducerSlice";

const CollectionItem = (props) => {
  console.log(props);

  const dispatch = useDispatch();

  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);

  const COLORS = COLORS_COLLECTION.map((collection) => collection.color);
  console.log(COLORS);

  const ID = props.id;

  return (
    <div className="brand-kit-collection">
      <button
        className="delete-item"
        onClick={() => dispatch(addCollectionData(ID))}
      >
        X
      </button>
      {COLORS.map((color) => {
        return <div className="colors" style={{ backgroundColor: `${color}` }}></div>;
      })}
    </div>
  );
};

export default CollectionItem;
