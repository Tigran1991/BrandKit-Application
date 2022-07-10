import React from "react";

import "../../App.css";

const ItemColors = (props) => {

  return (
    <>
      <div
        className="colors"
        style={{ backgroundColor: `${props.colorData}` }}
        key={props.colorData.id}
      ></div>
    </>
  );
};

export default ItemColors;
