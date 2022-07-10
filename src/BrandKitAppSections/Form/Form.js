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
import { selectedColorDivCollection } from "../../redux/features/ColorDivCollectionReducerSlice.js";
import { resetAfterSave } from "../../redux/features/ColorDivCollectionReducerSlice.js";
import { selectedColor } from "../../redux/features/ItemColorReducerSlice";

const Form = (props) => {
  const dispatch = useDispatch();

  const BUTTON_STATE = useSelector(selectSaveButtonState);
  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);

  const COLORS = COLORS_COLLECTION.map((collection) => collection.color);

  useEffect(() => {
    if (props.formData.length > 3) {
      dispatch(selectedSaveButtonState(true));
    } else {
      dispatch(selectedSaveButtonState(false));
    }
  });

  return (
    <div className="brand-kit-form">

      <AddLogo />
      <AddColors />
      <AddFonts />

      <div className="save-brand-kit">
        {COLORS_COLLECTION.length !== 0 && (
          <button
            className="save-brand-kit-btn"
            disabled={BUTTON_STATE}
            onClick={() => {
              const ID = generateId();
              dispatch(
                selectedItem({
                  id: ID,
                  color: COLORS,
                })
              );
              dispatch(
                selectedColor({
                  id: ID + 'itemColors',
                  color: COLORS,
                })
              );
              dispatch(resetAfterSave([]));
            }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
