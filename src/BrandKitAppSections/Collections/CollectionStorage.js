import React from "react";

import '../../App.css';
import EmptyCollectionStorage from "./EmptyCollectionStorage";
import UsersCollectionStorage from "./UsersCollectionStorage";

const CollectionStorage = (props) => {

    return (
        <div className="brand-kit-collections-container">
            {props.collectionData.length === 0 && <EmptyCollectionStorage />}

            {props.collectionData.length > 0 && <UsersCollectionStorage />}
        </div>
    )

}

export default CollectionStorage;