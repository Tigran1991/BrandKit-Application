import React from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";

import '../../App.css';
import { addCollectionData } from "../../redux/features/UserCollectionsReducerSlice";

const CollectionItem = (props) => {

    const dispatch = useDispatch();

    const ID = props.id;
    const IMAGE = props.image;

    return (
        <div className="brand-kit-collection" >
            <button className="delete-item" onClick={() => dispatch(addCollectionData(ID))}>X</button>
        </div>
    )
}

export default CollectionItem;