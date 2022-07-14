import React from "react";

import "../../App.css";
import { generateId } from "../../utils";

const ItemColors = (props) => {

  console.log(props.colorData);

  return (
    <>{props.colorData.map(color => {
      return (<div
        className="colors"
        style={{ backgroundColor: color.color }}
        key={generateId()}
      ></div>)
    })}
      
    </>
  );
};

export default ItemColors;
