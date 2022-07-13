import React, { memo, useEffect, useRef } from "react";
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

const ColorTemplate = memo(() => {
  const colorPickerRef = useRef();
  const currentColor = useRef();
  const INITIAL_COLOR = "green";

  const dispatch = useDispatch();

  const COLOR_PICKER = useSelector(selectColorPickerState);
  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);

  const colorPickerHandler = () => {
    dispatch(colorPickerSelectedState(true));
    const ID = generateId();
    dispatch(
      selectedColorDiv({
        id: ID,
      })
    );
  };

  const colorHandler = (color) => {
    currentColor.current.style.backgroundColor = color.hex;
  };

  useEffect(() => {
    const handler = (event) => {
      if (!colorPickerRef.current.contains(event.target)) {
        dispatch(colorPickerSelectedState(false));
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={colorPickerRef} className="color-template">
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
          <ChromePicker color={INITIAL_COLOR} onChange={colorHandler} ref={currentColor} />
        </div>
      )}
      <div className="selected-colors">
        {COLORS_COLLECTION.map((color) => {
          return (
            <ColorDiv
              colorItemData={color}
              colorData={currentColor}
              key={color.id}
            />
          );
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
});

export default ColorTemplate;
