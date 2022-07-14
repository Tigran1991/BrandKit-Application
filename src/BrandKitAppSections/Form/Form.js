import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../App.css";
import AddLogo from "./FormItems/Logo/AddLogo";
import AddFonts from "./FormItems/Fonts/AddFonts";
import AddColors from "./FormItems/Color/AddColors";
import { generateId } from "../../utils";
import { selectedSaveButtonState } from "../../redux/features/SaveButtonReducerSlice";
import { selectSaveButtonState } from "../../redux/features/SaveButtonReducerSlice";
import { selectedColorDivCollection } from "../../redux/features/ColorDivCollectionReducerSlice.js";
import { resetAfterSave } from "../../redux/features/ColorDivCollectionReducerSlice.js";
import { selectedItem } from "../../redux/features/ItemColorReducerSlice";
import { selectedColors } from "../../redux/features/ItemCollectionColors/ColorsReducerSlice.js";

const Form = (props) => {
  const dispatch = useDispatch();

  const BUTTON_STATE = useSelector(selectSaveButtonState);
  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);

  const COLORS = useSelector(selectedColors);
  const CURRENT_COLOR = COLORS.filter(color => {
    if(color === COLORS[COLORS.length - 1]){
      return color;
    }
  })

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
                  id: ID + "itemColors",
                  color: CURRENT_COLOR,
                  title: "Title",
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
