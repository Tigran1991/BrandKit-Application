import React from "react";
import { generateId } from "../../utils";
import CollectionItem from "./CollectionItem";

const CollectionItemColours = (props) => {
  console.log(props);
  return <CollectionItem color={props.color} key={generateId()} />;
};

export default CollectionItemColours;
