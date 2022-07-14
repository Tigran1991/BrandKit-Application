import React from "react";

import "../../App.css";
import { generateId } from "../../utils";

const ItemColors = (props) => {

  return (
    <>
      {props.colorData.map(color => {
        return <div className="colors" style={{backgroundColor: color}} key={generateId()}></div>
      })}
    </>
      
  );
};

export default ItemColors;
