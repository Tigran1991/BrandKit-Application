import React from "react";

import '../../App.css';
import CollectionItem from "./CollectionItem.js";

const UsersCollectionStorage = (props) => {

    return (
        <div className="users-brand-kit-board">
            {props.collections.map(brandKits => {
                return <CollectionItem id={brandKits.id} image={brandKits.image} key={brandKits.id}/>
            })}
        </div>
    )
}

export default UsersCollectionStorage;