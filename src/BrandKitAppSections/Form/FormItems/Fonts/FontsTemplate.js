import React, { memo } from "react";

import "./Fonts.css";

const FontsTemplate = memo(() => {

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
});

export default FontsTemplate;
