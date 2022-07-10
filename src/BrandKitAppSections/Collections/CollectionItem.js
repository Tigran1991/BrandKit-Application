import React from "react";
import { useDispatch} from "react-redux";

import "../../App.css";
import { deleteCollectionItem } from "../../redux/features/ItemColorsReducerSlice";
import ItemColors from "./ItemColors";
import { generateId } from "../../utils";

const CollectionItem = (props) => {
  const dispatch = useDispatch();

  const ID = props.collectionData.id;

  return (
    <div className="brand-kit-collection">
      <button
        className="delete-item"
        onClick={() => {
          dispatch(deleteCollectionItem(ID));
        }}
      >
        X
      </button>
      <div className="itemColors">
        {props.collectionData.color.map(color => {
          return <ItemColors colorData={color} key={ID + generateId()} />
          })
        }
      </div>
    </div>
  );
};

export default CollectionItem;
