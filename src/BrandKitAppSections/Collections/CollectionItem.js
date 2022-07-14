import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "../../App.css";
import { deleteCollectionItem } from "../../redux/features/ItemColorsReducerSlice";
import ItemColors from "./ItemColors";
import { generateId } from "../../utils";

const CollectionItem = (props) => {
  const dispatch = useDispatch();

  const ID = props.collectionData.id;

  console.log(props.collectionData.color);

  const [title, setTitle] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(props.collectionData.title);

  const titleHandler = (event) => {
    setCurrentTitle(event.target.value);
  }

  const submitHandler = () => {
    setTitle(false);
  }

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
        <ItemColors colorData={props.collectionData.color} key={ID + generateId()} />
      </div>
      <div className="collection">
        {title && (
          <form className="collection-form" onSubmit={submitHandler} >
            <input className="collection-name" type="text" onChange={titleHandler} />
          </form>
        )}
        {!title && <h3 className="collection-title" onClick={() => setTitle(true)}>{currentTitle}</h3>}
      </div>
    </div>
  );
};

export default CollectionItem;
