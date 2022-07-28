import React from "react";
import FontsTemplate from "./FontsTemplate";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fontsTemplateCurrentState } from "../../../../redux/features/fontsTemplate";

const BrandFonts = () => {
  const dispatch = useDispatch();

  const fontsTemplate = useSelector((state) => state.fontsTemplate);

  const showFontsTemplate = () => dispatch(fontsTemplateCurrentState());

  return (
    <Styled.FontsSection>
      <Styled.BrandsFontLabel
        style={{
          justifyContent: fontsTemplate.isOpen ? "flex-start" : "center",
        }}
      >
        <Styled.SelectFontsBtn onClick={showFontsTemplate}>
          Brand Fonts
        </Styled.SelectFontsBtn>
      </Styled.BrandsFontLabel>
      {fontsTemplate.isOpen && <FontsTemplate />}
    </Styled.FontsSection>
  );
};

export default BrandFonts;
