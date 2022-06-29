import React from "react";

import "./Color.css";

const ColorTemplate = () => {
  return (
    <>
      <div className="selected-colors">
        <div className="add-brand-colors">
          <input type="file" style={{ display: "none" }} id="download-logo" />
          <label htmlFor="download-logo" className="plus" />
        </div>
        <div className="added-colors"></div>
      </div>
      <div className="reset">
        <button type="reset" className="reset-btn">
          Reset
        </button>
      </div>
    </>
  );
};

export default ColorTemplate;
