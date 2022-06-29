import React from "react";
import LogoTemplate from "./LogoTemplate";

import "./Logo.css";
import { useDispatch, useSelector } from "react-redux";
import {
  logoTemplateState,
  showLogoTemplateState,
  closeLogoTemplateState,
} from "../../../../redux/features/form-items-templates/LogoTemplateReducerSlice";

const AddLogo = () => {
  const dispatch = useDispatch();

  const LOGO = useSelector(logoTemplateState);

  return (
    <div className="logo-section">
      <div className="brand-logo-label">
        <button
          className="logo-btn"
          onClick={() => dispatch(showLogoTemplateState(true))}
        >
          Brand Logo
        </button>
        <button
          className="close-btn"
          onClick={() => dispatch(closeLogoTemplateState(false))}
        >
          Close
        </button>
      </div>

      {LOGO && <LogoTemplate />}
    </div>
  );
};

export default AddLogo;
