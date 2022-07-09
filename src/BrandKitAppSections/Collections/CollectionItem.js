import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../App.css";
import { addCollectionData } from "../../redux/features/UserCollectionsReducerSlice";
import { selectedColorDivCollection } from "../../redux/features/DivsCollectionReducerSlice";
import ItemColors from "./ItemColors";
import { generateId } from "../../utils";

const CollectionItem = (props) => {
  const dispatch = useDispatch();

  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);
  const COLORS = COLORS_COLLECTION.map(collection => collection.color);

  const ID = props.id;

  return (
    <div className="brand-kit-collection">
      <button
        className="delete-item"
        onClick={() => dispatch(addCollectionData(ID))}
      >
        X
      </button>
      {COLORS.map(color => {
        return <ItemColors colorData={color} key={ID + generateId()}/>;
      })}
    </div>
  );
};

export default CollectionItem;
