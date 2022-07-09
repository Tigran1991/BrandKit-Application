import React from "react";
import { useDispatch } from "react-redux/es/exports";

import "./Fonts.css";
import { closeFontsTemplateState } from "../../../../redux/features/form-items-templates/FontsTemplateReducerSlice";

const FontsTemplate = () => {

  const dispatch = useDispatch();

  return (
    <div className="fonts-template">
      <div className="add-font-btn">
          <input type="file" style={{ display: "none" }} id="download-logo" />
      </div>
      <div className="selected-font">
        <div className="added-font"></div>
      </div>
      <div className="reset-fonts">
        <button type="reset" className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default FontsTemplate;
