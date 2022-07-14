import React from "react";

import "../../App.css";
import { generateId } from "../../utils";

const ItemColors = (props) => {

  return (
    <>
      <div
        className="colors"
        style={{ backgroundColor: props.colorData }}
        key={generateId()}
      ></div>
    </>
  );
};

export default ItemColors;
