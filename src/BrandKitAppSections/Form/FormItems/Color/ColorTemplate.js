import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ChromePicker } from "react-color";

import "./Color.css";
import ColorDiv from "./ColorDiv";
import { useSelector } from "react-redux";
import {
  selectColorPickerState,
  colorPickerSelectedState,
} from "../../../../redux/features/ColorPickerReducerSlice";
import { selectedColorDiv } from "../../../../redux/features/ColorDivReducerSlice";
import { generateId } from "../../../../utils";
import { selectedColorDivCollection } from "../../../../redux/features/ColorDivCollectionReducerSlice.js";
import { resetColors } from "../../../../redux/features/ColorDivCollectionReducerSlice.js";

const ColorTemplate = () => {
  const [currentColor, setCurrentColor] = useState();

  const dispatch = useDispatch();

  const COLOR_PICKER = useSelector(selectColorPickerState);
  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);

  const colorPickerHandler = () => {
    dispatch(colorPickerSelectedState(true));
  };

  const colorHandler = (color) => {
    const ID = generateId();
    setCurrentColor(color.hex);
    dispatch(
      selectedColorDiv({
        id: ID,
        color: color.hex,
      })
    );
    dispatch(colorPickerSelectedState(false));
  };

  useEffect(() => {
    document.addEventListener('mousedown', () => dispatch(colorPickerSelectedState(false)));
  })

  return (
    <div className="color-template">
      <div className="add-colors">
        <div className="add-brand-colors">
          <button
            className="add-colors-btn"
            onClick={colorPickerHandler}
          ></button>
        </div>
      </div>
      {COLOR_PICKER && (
        <div className="colorPicker">
          <ChromePicker color={currentColor} onChangeComplete={colorHandler} />
        </div>
      )}
      <div className="selected-colors">
        {COLORS_COLLECTION.map((color) => {
          return <ColorDiv colorItemData={color} key={color.id} />;
        })}
      </div>
      <div className="reset-color">
        <button
          type="reset"
          className="reset-btn"
          onClick={() => dispatch(resetColors([]))}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ColorTemplate;
