import React from "react";

import "./Logo.css";

const LogoTemplate = () => {
  return (
    <>
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
    </>
  );
};

export default LogoTemplate;
