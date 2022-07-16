import React, { memo } from "react";
import * as Styled from "./styled";
import { useDispatch } from "react-redux";
import { deleteColorsDivItem } from "../../../../redux/features/ColorDivCollectionReducerSlice.js.js";

const SelectedColor = memo((props) => {
  const dispatch = useDispatch();
  const ID = props.colorItemData.id;

  const deleteItemHandler = () => dispatch(deleteColorsDivItem(ID));

  return (
    <Styled.SelectedColor
      ref={props.colorData}
      style={{ backgroundColor: "green" }}
    >
      <Styled.DeleteItem onClick={deleteItemHandler}>X</Styled.DeleteItem>
    </Styled.SelectedColor>
  );
});

export default SelectedColor;
