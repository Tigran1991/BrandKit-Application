import React from "react";
import FontsTemplate from "./FontsTemplate";

import "./Fonts.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fontsTemplateState,
  showFontsTemplateState,
  closeFontsTemplateState,
} from "../../../../redux/features/form-items-templates/FontsTemplateReducerSlice";

const AddFonts = () => {
  const dispatch = useDispatch();

  const FONTS = useSelector(fontsTemplateState);

  return (
    <div className="fonts-section">
      <div className="brand-fonts-label">
        <button
          className="logo-btn"
          onClick={() => dispatch(showFontsTemplateState(true))}
        >
          Brand Fonts
        </button>
      </div>

      {FONTS && <FontsTemplate />}
    </div>
  );
};

export default AddFonts;
