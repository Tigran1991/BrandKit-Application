import React from "react";
import * as Styled from "./styled";

const CollectionItem = (props) => {
  console.log(props);
  return <Styled.ColorItem style={{ backgroundColor: props.color }} />;
};

export default CollectionItem;
