import React from "react";
import * as Styled from "./styled";

const CollectionColorItem = (props) => {
  return <Styled.ColorItem style={{ backgroundColor: props.color }} />;
};

export default CollectionColorItem;
