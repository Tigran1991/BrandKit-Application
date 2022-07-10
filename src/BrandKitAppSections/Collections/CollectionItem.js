import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../App.css";
import { addCollectionData } from "../../redux/features/UserCollectionsReducerSlice";
import { selectedColorsForItem } from "../../redux/features/ItemColorsReducerSlice";
import ItemColors from "./ItemColors";
import { generateId } from "../../utils";
import { resetAfterDeleteItem } from "../../redux/features/ItemColorsReducerSlice";

const CollectionItem = (props) => {
  const dispatch = useDispatch();

  const COLORS_COLLECTION = useSelector(selectedColorsForItem);
  console.log(COLORS_COLLECTION);

  const ID = props.id;

  return (
    <div className="brand-kit-collection">
      <button
        className="delete-item"
        onClick={() => {
          dispatch(addCollectionData(ID));
          dispatch(resetAfterDeleteItem([]))
        }}
      >
        X
      </button>
      <div className="itemColors">
        {COLORS_COLLECTION.map(collection => {
          return collection.color.map(color => {
            return <ItemColors colorData={color} key={ID + generateId()} />
            })
          })
        }
      </div>
    </div>
  );
};

export default CollectionItem;
