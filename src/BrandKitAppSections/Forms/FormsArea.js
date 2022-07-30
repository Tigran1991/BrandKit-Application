import React, { memo } from "react";
import * as Styled from "./styled";
import BrandLogos from "./FormItems/Logos/BrandLogos";
import BrandColours from "./FormItems/Colours/BrandColours";
import BrandFonts from "./FormItems/Fonts/BrandFonts";
import { useDispatch, useSelector } from "react-redux";
import { addCollectionItem } from "../../redux/features/collection";
import { saveColorItems } from "../../redux/features/coloursReducers/coloursTemplateItems";
import { saveColours } from "../../redux/features/coloursReducers/colorsSelection";
import { collectionAreaCurrentState } from "../../redux/features/AppAndTemplates/collectionAreaState";
import { discardSelectedColor } from "../../redux/features/coloursReducers/selectedColor";

const FormsArea = memo(() => {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.coloursTemplateItems.coloursTemplateItems.itemId
  );

  const collectionItemColors = useSelector(
    (state) => state.selectedColor.selectedColor
  );

  const addCollection = () => {
    dispatch(addCollectionItem(collectionItemColors));
    dispatch(saveColours());
    dispatch(saveColorItems());
    dispatch(collectionAreaCurrentState());
    dispatch(discardSelectedColor());
  };

  return (
    <Styled.BrandKitForm>
      <BrandLogos />
      <BrandColours />
      <BrandFonts />

      {items.length > 0 && (
        <Styled.SaveCollection onClick={addCollection}>
          Save
        </Styled.SaveCollection>
      )}
    </Styled.BrandKitForm>
  );
});

export default FormsArea;
