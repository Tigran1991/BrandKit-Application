import React from "react";
import { generateId } from "../../utils";
import CollectionItem from "./CollectionItem";

const CollectionItemColours = (props) => {
  return <CollectionItem color={props.color} key={generateId()} />;
};

export default CollectionItemColours;
