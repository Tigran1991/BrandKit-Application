import React from "react";
import * as Styled from "./styled";
import ColorTemplate from "./ColoursTemplate";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { coloursTemplateCurrentState } from "../../../../redux/features/coloursTemplate";

const BrandColours = () => {
  const dispatch = useDispatch();

  const coloursTemplate = useSelector((state) => state.coloursTemplate);

  const showColoursTemplate = () => dispatch(coloursTemplateCurrentState());

  return (
    <Styled.ColorSection>
      <Styled.BrandColorLabel
        style={{
          justifyContent: coloursTemplate.isOpen ? "flex-start" : "center",
        }}
      >
        <Styled.SelectColorBtn onClick={showColoursTemplate}>
          Brand Colours
        </Styled.SelectColorBtn>
      </Styled.BrandColorLabel>
      {coloursTemplate.isOpen && <ColorTemplate />}
    </Styled.ColorSection>
  );
};

export default BrandColours;
