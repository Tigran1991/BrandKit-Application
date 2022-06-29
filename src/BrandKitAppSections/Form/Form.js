import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../App.css";
import AddLogo from "./FormItems/Logo/AddLogo";
import AddFonts from "./FormItems/Fonts/AddFonts";
import AddColors from "./FormItems/Color/AddColors";
import { selectedItem } from "../../redux/features/ItemReducerSlice";
import { generateId } from "../../utils";
import { selectedSaveButtonState } from "../../redux/features/SaveButtonReducerSlice";
import { selectSaveButtonState } from "../../redux/features/SaveButtonReducerSlice";

const Form = (props) => {
  const dispatch = useDispatch();

  const BUTTON_STATE = useSelector(selectSaveButtonState);

  useEffect(() => {
    if (props.formData.length > 3) {
      dispatch(selectedSaveButtonState(true));
    } else {
      dispatch(selectedSaveButtonState(false));
    }
  });

  const SHOW = true;

  return (
    <div className="brand-kit-form">

      {SHOW && <AddLogo />}
      {<AddColors />}
      {<AddFonts />}

      <div className="save-brand-kit">
        <button
          className="save-brand-kit-btn"
          disabled={BUTTON_STATE}
          onClick={() =>
            dispatch(
              selectedItem({
                id: generateId(),
                image: "Tesla_Motors.png",
              })
            )
          }
        >
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
};

export default Form;
