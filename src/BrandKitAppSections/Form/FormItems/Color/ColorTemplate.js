import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import "./Color.css";
import { closeColorTemplateState } from "../../../../redux/features/form-items-templates/ColorTemplateReducerSlice";

const ColorTemplate = () => {

  const dispatch = useDispatch();

  return (
    <div className="color-template">
      <button
        className="close-color-template-btn"
        onClick={() => dispatch(closeColorTemplateState(false))}
      >
        Close
      </button>
      <div className="selected-colors">
        <div className="add-brand-colors">
          <input type="file" style={{ display: "none" }} id="download-logo" />
          <label htmlFor="download-logo" className="plus" />
        </div>
        <div className="added-colors"></div>
      </div>
      <div className="reset">
        <button type="reset" className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ColorTemplate;
