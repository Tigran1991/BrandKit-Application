import React from "react";
import ColorTemplate from "./ColorTemplate";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  colorTemplateState,
  showColorTemplateState,
  closeColorTemplateState,
} from "../../../../redux/features/form-items-templates/ColorTemplateReducerSlice";

import "./Color.css";

const AddColors = () => {
  const dispatch = useDispatch();

  const COLOR = useSelector(colorTemplateState);

  return (
    <div className="color-section">
      <div className="brand-color-label">
        <button
          className="logo-btn"
          onClick={() => dispatch(showColorTemplateState(true))}
        >
          Brand color
        </button>
        <button
          className="close-btn"
          onClick={() => dispatch(closeColorTemplateState(false))}
        >
          Close
        </button>
      </div>

      {COLOR && <ColorTemplate />}
    </div>
  );
};

export default AddColors;
