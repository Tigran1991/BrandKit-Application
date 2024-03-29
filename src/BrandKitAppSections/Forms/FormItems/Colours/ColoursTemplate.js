import React, { memo, useRef } from "react";
import * as Styled from "./styled";
import { ColorInput } from "./ColorPicker/ColorInput";
import { useSelector } from "react-redux";
import {
  addColoursTemplateItem,
  saveColorItems,
} from "../../../../redux/features/coloursReducers/coloursTemplateItems";
import { useDispatch } from "react-redux/es/exports";
import { discardColours } from "../../../../redux/features/coloursReducers/colorsSelection";
import { discardSelectedColor } from "../../../../redux/features/coloursReducers/selectedColor";
import { addSelectedColor } from "../../../../redux/features/coloursReducers/selectedColor";

const ColorTemplate = memo(() => {
  const dispatch = useDispatch();

  const testRef = useRef();
  const change = (color) => {
    testRef.current.style.backgroundColor = color;
  };

  const changeEnd = (color) => {
    testRef.current.style.backgroundColor = color;
  };

  const colors = ["red", "#6262f5", "green", "cyan", "#123456"];

  const initialColor = "#" + Math.floor(Math.random() * 1000);

  const colorRef = useRef();

  const colorItems = useSelector(
    (state) => state.coloursTemplateItems.coloursTemplateItems.itemId
  );

  const color = useSelector((state) => state.colours.colours);

  const addItem = () => {
    dispatch(addColoursTemplateItem());
    dispatch(addSelectedColor(color));
    dispatch(discardColours());
  };

  const addColours = () => {
    dispatch(addSelectedColor(color));
    dispatch(discardColours());
  };

  const cancelColours = () => {
    dispatch(saveColorItems());
    dispatch(discardSelectedColor());
    dispatch(discardColours());
  };

  return (
    <Styled.ColorTemplate>
      <Styled.ColorsArea>
        {colorItems.map((itemId) => {
          return (
            <Styled.AddBrandColors key={itemId} ref={colorRef}>
              <ColorInput
                color={initialColor}
                colorList={colors}
                onChange={change}
                onChangeEnd={changeEnd}
              />
            </Styled.AddBrandColors>
          );
        })}
        <Styled.BrandColorsAdderBtn>
          <Styled.AddBrandColorBtn onClick={addItem} />
        </Styled.BrandColorsAdderBtn>
      </Styled.ColorsArea>

      <Styled.SelectedColors>
        <div
          ref={testRef}
          style={{
            width: 200,
            height: 200,
            float: "right",
            backgroundColor: initialColor,
            visibility: "hidden",
          }}
        ></div>
      </Styled.SelectedColors>
      <Styled.BrandColoursBtnArea>
        <Styled.SaveColorsBtn onClick={cancelColours}>
          Discard
        </Styled.SaveColorsBtn>
        <Styled.SaveColorsBtn onClick={addColours}>Save</Styled.SaveColorsBtn>
      </Styled.BrandColoursBtnArea>
    </Styled.ColorTemplate>
  );
});

export default ColorTemplate;
