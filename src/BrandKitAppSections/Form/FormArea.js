import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./styled";

import "../../App.css";
import AddLogo from "./FormItems/Logo/BrandLogo";
import AddFonts from "./FormItems/Fonts/BrandFonts";
import AddColors from "./FormItems/Color/BrandColors";
import { generateId } from "../../utils";
import { saveFormButtonSelectedState } from "../../redux/features/SaveFormButtonReducerSlice";
import { saveFormButtonCurrentState } from "../../redux/features/SaveFormButtonReducerSlice";
import { selectedColorDivCollection } from "../../redux/features/ColorDivCollectionReducerSlice.js.js";
import { resetAfterSave } from "../../redux/features/ColorDivCollectionReducerSlice.js.js";
import { selectedItem } from "../../redux/features/ItemColorReducerSlice";
import { selectItemsColors } from "../../redux/features/ItemCollectionColors/ItemsColorsReducerSlice";
import { resetColorsAfterSave } from "../../redux/features/ItemCollectionColors/ItemsColorsReducerSlice";

const FormArea = (props) => {
  const dispatch = useDispatch();

  const BUTTON_STATE = useSelector(saveFormButtonCurrentState);
  const COLORS_COLLECTION = useSelector(selectedColorDivCollection);

  const CURRENT_COLORS = useSelector(selectItemsColors);

  useEffect(() => {
    if (props.formData.length > 3) {
      dispatch(saveFormButtonSelectedState(true));
    } else {
      dispatch(saveFormButtonSelectedState(false));
    }
  });

  return (
    <Styled.BrandKitForm>
      <AddLogo />
      <AddColors />
      <AddFonts />

      {COLORS_COLLECTION.length !== 0 && (
        <Styled.SaveCollection
          disabled={BUTTON_STATE}
          onClick={() => {
            const ID = generateId();
            dispatch(
              selectedItem({
                id: ID + "itemColors",
                color: CURRENT_COLORS,
                title: "Title",
              })
            );
            dispatch(resetAfterSave([]));
            dispatch(resetColorsAfterSave([]));
          }}
        >
          Save
        </Styled.SaveCollection>
      )}
    </Styled.BrandKitForm>
  );
};

export default FormArea;
