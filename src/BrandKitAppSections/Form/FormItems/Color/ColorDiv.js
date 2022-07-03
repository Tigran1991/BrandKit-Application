import React from "react";

import './Color.css';

const ColorDiv = (props) => {
    return (
        <div className="added-colors" style={{backgroundColor: props.colorItemData.color}}></div>
    )
}

export default ColorDiv;