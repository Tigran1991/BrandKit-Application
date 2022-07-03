import React from "react";
import { useDispatch } from "react-redux/es/exports";

import "./Logo.css";
import { closeLogoTemplateState } from "../../../../redux/features/form-items-templates/LogoTemplateReducerSlice";
import logo from '../Logo/logo-images/logo.png';

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
      <div className="add-logo">
        <div className="add-brand-logo">
          <input
            type="file"
            style={{ display: "none" }}
            id='download-logo'
          />
          <div>
            <label htmlFor="download-logo" className="add-logo-btn"></label>
          </div>
        </div>
      </div>
      <div className="selected-logos">
        <div className="added-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="added-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="added-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="added-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="added-logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
      <div className="reset-logo">
        <button type="reset" className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default LogoTemplate;
