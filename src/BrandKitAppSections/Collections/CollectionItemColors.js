import React from "react";
import * as Styled from "./styled";

const CollectionItemColors = (props) => {
  return props.color.map((item) => {
    return <Styled.ColorItem style={{ backgroundColor: item }} />;
  });
};

export default CollectionItemColors;
