import React from "react";
import { useDispatch } from "react-redux/es/exports";

import "./Fonts.css";
import { closeFontsTemplateState } from "../../../../redux/features/form-items-templates/FontsTemplateReducerSlice";

const FontsTemplate = () => {

  const dispatch = useDispatch();

  return (
    <div className="fonts-template">
      <button
        className="close-fonts-template-btn"
        onClick={() => dispatch(closeFontsTemplateState(false))}
      >
        Close
      </button>
      <div className="selected-font">
        <div className="add-font-btn">
          <input type="file" style={{ display: "none" }} id="download-logo" />
        </div>
        <div className="added-font"></div>
      </div>
      <div className="reset">
        <button type="reset" className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default FontsTemplate;
