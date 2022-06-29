import React from "react";

import "./Fonts.css";

const FontsTemplate = () => {
  return (
    <>
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
    </>
  );
};

export default FontsTemplate;
