import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ChromePicker  } from "react-color";

import "./Color.css";
import ColorDiv from "./ColorDiv";
import { closeColorTemplateState } from "../../../../redux/features/form-items-templates/ColorTemplateReducerSlice";
import { useSelector } from "react-redux";
import {
  selectColorPickerState,
  colorPickerSelectedState,
} from "../../../../redux/features/ColorPickerReducerSlice";
import { selectedColorDiv } from "../../../../redux/features/ColorDivReducerSlice";
import { generateId } from "../../../../utils";
import { selectedColorDivCollection } from "../../../../redux/features/DivsCollectionReducerSlice";
import { resetColors } from "../../../../redux/features/DivsCollectionReducerSlice";

const ColorTemplate = () => {
  const [currentColor, setCurrentColor] = useState();

  const handleColor = (color) => {
    setCurrentColor(color.hex);
    dispatch(selectedColorDiv({
      id: generateId(),
      color: color.hex,
    }));
    dispatch(colorPickerSelectedState(false));
  };

  const dispatch = useDispatch();

  const COLOR_PICKER = useSelector(selectColorPickerState);
  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);

  return (
    <div className="color-template">
      <button
        className="close-color-template-btn"
        onClick={() => dispatch(closeColorTemplateState(false))}
      >
        Close
      </button>
      <div className="add-colors">
        <div className="add-brand-colors">
          <button
            className="add-colors-btn"
            onClick={() => dispatch(colorPickerSelectedState(true))}
          ></button>
        </div>
      </div>
      {COLOR_PICKER && (
        <div className="colorPicker">
          <ChromePicker color={currentColor} disableAlpha={true} onChangeComplete={handleColor} />
        </div>
      )}
      <div className="selected-colors">
        {COLORS_COLLECTION.map(color => {
          return <ColorDiv colorItemData={color} key={color.id} />
        })}
      </div>
      <div className="reset-color">
        <button type="reset" className="reset-btn" onClick={() => resetColors(generateId())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ColorTemplate;
