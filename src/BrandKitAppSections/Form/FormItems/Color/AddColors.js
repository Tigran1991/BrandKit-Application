import React, { memo } from "react";
import ColorTemplate from "./ColorTemplate";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  colorTemplateState,
  showColorTemplateState,
} from "../../../../redux/features/form-items-templates/ColorTemplateReducerSlice";

import "./Color.css";

const AddColors = memo(() => {
  const dispatch = useDispatch();

  const COLOR = useSelector(colorTemplateState);
  return (
    <div className="color-section">
      <div className="brand-color-label" style={{justifyContent: COLOR ? 'flex-start' : 'center'}}>
        <button
          className="logo-btn"
          onClick={() => dispatch(showColorTemplateState(!COLOR))}
        >
          Brand Color
        </button>
      </div>

      {COLOR && <ColorTemplate />}
    </div>
  );
});

export default AddColors;
