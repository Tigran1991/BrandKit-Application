import React from "react";
import { useDispatch } from "react-redux/es/exports";

import "./Logo.css";
import { closeLogoTemplateState } from "../../../../redux/features/form-items-templates/LogoTemplateReducerSlice";

const LogoTemplate = () => {

  const dispatch = useDispatch();

  return (
    <div className="logo-template">
      <button
        className="close-logo-template-btn"
        onClick={() => dispatch(closeLogoTemplateState(false))}
      >
        Close
      </button>
      <div className="selected-logos">
        <div className="add-brand-logo">
          <input type="file" style={{ display: "none" }} id="download-logo" />
          <label htmlFor="download-logo" className="plus" />
        </div>
        <div className="added-logo"></div>
      </div>
      <div className="reset">
        <button type="reset" className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default LogoTemplate;
