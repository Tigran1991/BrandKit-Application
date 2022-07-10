import React from "react";
import { useSelector } from "react-redux";

import '../../App.css';
import EmptyCollectionStorage from "./EmptyCollectionStorage";
import UsersCollectionStorage from "./UsersCollectionStorage";
import { selectedColorsForItem } from "../../redux/features/ItemColorsReducerSlice";

const CollectionStorage = (props) => {

    const COLORS_COLLECTION = useSelector(selectedColorsForItem);

    return (
        <div className="brand-kit-collections-container">
            {COLORS_COLLECTION.length === 0 && <EmptyCollectionStorage />}

            {COLORS_COLLECTION.length > 0 && <UsersCollectionStorage />}
        </div>
    )

}

export default CollectionStorage;