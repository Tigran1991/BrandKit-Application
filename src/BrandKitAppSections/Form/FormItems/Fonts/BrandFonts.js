import React from "react";
import FontsTemplate from "./FontsTemplate";
import * as Styled from './styled';
import { useDispatch, useSelector } from "react-redux";
import {
  fontsTemplateState,
  showFontsTemplateState,
} from "../../../../redux/features/form-items-templates/FontsTemplateReducerSlice";

const BrandFonts = () => {
  const dispatch = useDispatch();

  const showFontsTemplate = useSelector(fontsTemplateState);

  const fontsTemplateHandler = () => dispatch(showFontsTemplateState(!showFontsTemplate))

  return (
    <Styled.FontsSection>
      <Styled.BrandsFontLabel style={{justifyContent: showFontsTemplate ? 'flex-start' : 'center'}}>
        <Styled.SelectFontsBtn
          onClick={fontsTemplateHandler}
        >
          Brand Fonts
        </Styled.SelectFontsBtn>
      </Styled.BrandsFontLabel>

      {showFontsTemplate && <FontsTemplate />}
    </Styled.FontsSection>
  );
};

export default BrandFonts;
