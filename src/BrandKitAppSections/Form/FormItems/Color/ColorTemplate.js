import React, { memo, useRef } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import * as Styled from "./styled";
import ColorDiv from "./SelectedColor";
import { useSelector } from "react-redux";
import { selectedColorDiv } from "../../../../redux/features/ColorDivReducerSlice";
import { generateId } from "../../../../utils";
import { selectedColorDivCollection } from "../../../../redux/features/ColorDivCollectionReducerSlice.js";
import { resetColors } from "../../../../redux/features/ColorDivCollectionReducerSlice.js";
import { selectedItemColors } from "../../../../redux/features/ItemCollectionColors/ColorReducerSlice";
import { selectedColors } from "../../../../redux/features/ItemCollectionColors/ColorsReducerSlice.js";
import { selectedItemsColors } from "../../../../redux/features/ItemCollectionColors/ItemsColorsReducerSlice";
import { ColorInput } from "../../../../ColorPicker/ColorInput";

const ColorTemplate = memo(() => {
  const colorPickerRef = useRef();
  const currentColor = useRef("#fff");
  const testRef = useRef();
  const dispatch = useDispatch();

  const initialColor = "#123456";
  const colors = ["red", "#6262f5", "green", "cyan", "#123456"];

  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);
  const COLORS = useSelector(selectedColors);
  const CURRENT_COLOR = COLORS.filter(
    (color) => color === COLORS[COLORS.length - 1]
  );

  const change = (color) => {
    currentColor.current.style.backgroundColor = color;

    const ID = generateId();
    dispatch(
      selectedColorDiv({
        id: ID,
      })
    );
  };

  const changeEnd = (color) => {
    testRef.current.style.backgroundColor = color;
  };

  const resetColorsHandler = () => dispatch(resetColors([]));

  return (
    <Styled.ColorTemplate ref={colorPickerRef}>
      <Styled.AddBrandColors>
        <ColorInput
          color={initialColor}
          colorList={colors}
          onChange={change}
          onChangeEnd={changeEnd}
        />
      </Styled.AddBrandColors>

      <Styled.SelectedColors>
        {COLORS_COLLECTION.map((color) => {
          return (
            <ColorDiv
              colorItemData={color}
              colorData={currentColor}
              key={color.id}
            />
          );
        })}
      </Styled.SelectedColors>

      <Styled.ResetColorsBtn type="reset" onClick={resetColorsHandler}>
        Reset
      </Styled.ResetColorsBtn>
    </Styled.ColorTemplate>
  );
});

export default ColorTemplate;
