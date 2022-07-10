import React from "react";
import { useSelector } from "react-redux";

import '../../App.css';
import CollectionItem from "./CollectionItem.js";
import { selectedColorsForItem } from "../../redux/features/ItemColorsReducerSlice";

const UsersCollectionStorage = (props) => {

    const COLORS_COLLECTION = useSelector(selectedColorsForItem);

    return (
        <div className="users-brand-kit-board">
            {COLORS_COLLECTION.map(collection => {
                return <CollectionItem collectionData={collection} key={collection.id}/>
            })}
        </div>
    )
}

export default UsersCollectionStorage;