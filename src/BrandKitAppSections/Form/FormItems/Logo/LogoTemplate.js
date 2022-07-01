import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";

import "./Logo.css";
import { closeLogoTemplateState } from "../../../../redux/features/form-items-templates/LogoTemplateReducerSlice";

const LogoTemplate = () => {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
    const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

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
            onChange={changeHandler}
          />
          {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p></p>
          )}
          <div>
            <button className="plus" onClick={handleSubmission}></button>
          </div>
        </div>
      </div>
      <div className="selected-logos">
        <div className="added-logo"></div>
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
