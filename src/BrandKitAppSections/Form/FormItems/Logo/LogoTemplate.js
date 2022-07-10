import React, { memo } from "react";

import "./Logo.css";

const LogoTemplate = memo(() => {

  return (
    <div className="logo-template">
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
        {/* <div className="added-logo">
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
        </div> */}
      </div>
      <div className="reset-logo">
        <button type="reset" className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
});

export default LogoTemplate;
