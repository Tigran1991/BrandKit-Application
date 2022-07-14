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
import { selectedItemColors } from "../../../../redux/features/ItemCollectionColors/ColorReducerSlice";
import { selectedColors } from "../../../../redux/features/ItemCollectionColors/ColorsReducerSlice.js";
import { selectedItemsColors } from "../../../../redux/features/ItemCollectionColors/ItemsColorsReducerSlice";

const ColorTemplate = memo(() => {
  const colorPickerRef = useRef();
  const currentColor = useRef();
  const INITIAL_COLOR = "green";

  const dispatch = useDispatch();

  const COLOR_PICKER = useSelector(selectColorPickerState);
  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);

  const COLORS = useSelector(selectedColors);
  const CURRENT_COLOR = COLORS.filter((color) => {
    if (color === COLORS[COLORS.length - 1]) {
      return color;
    }
  });

  console.log(CURRENT_COLOR.length);

  const colorPickerHandler = () => {
    dispatch(colorPickerSelectedState(true));
    const ID = generateId();
    dispatch(
      selectedColorDiv({
        id: ID,
      })
    );
    if(CURRENT_COLOR.length > 0){
      dispatch(
        selectedItemsColors({
          color: CURRENT_COLOR,
        })
      );
    }
  };

  const colorHandler = (color) => {
    currentColor.current.style.backgroundColor = color.hex;

    dispatch(
      selectedItemColors({
        color: color.hex,
      })
    );
    
  };

  useEffect(() => {
    const handler = (event) => {
      if (!colorPickerRef.current.contains(event.target)) {
        dispatch(colorPickerSelectedState(false));
      }
    };

    document.addEventListener("mousedown", handler);
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
          <ChromePicker
            color={INITIAL_COLOR}
            onChange={colorHandler}
            ref={currentColor}
          />
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
      <div className="save-color">
        <button
          type="save"
          className="save-btn"
          onClick={() => dispatch(
            selectedItemsColors({
              color: CURRENT_COLOR,
            })
          )}
        >
          Save
        </button>
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
