import React from "react";
import * as Styled from "./styled";
import BrandLogos from "./FormItems/Logos/BrandLogos";
import BrandColours from "./FormItems/Colours/BrandColours";
import BrandFonts from "./FormItems/Fonts/BrandFonts";
import { useDispatch, useSelector } from "react-redux";
import { addCollectionItem } from "../../redux/features/collection";
import { saveColorItems } from "../../redux/features/coloursTemplateItems";
import { saveColours } from "../../redux/features/colours";
import { collectionCurrentStatus } from "../../redux/features/collectionStatus";

const FormsArea = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.coloursItems.coloursItems);

  const collectionItemColors = useSelector(state => state.selectedColor.selectedColor);

  const addCollection = () => {
    dispatch(addCollectionItem(collectionItemColors));
    dispatch(saveColours());
    dispatch(saveColorItems());
    dispatch(collectionCurrentStatus());
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
};

export default FormsArea;
