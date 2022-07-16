import React, { memo } from "react";
import * as Styled from './styled';
import ColorTemplate from "./ColorTemplate";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  colorTemplateState,
  showColorTemplateState,
} from "../../../../redux/features/form-items-templates/ColorTemplateReducerSlice";

const BrandColor = memo(() => {
  const dispatch = useDispatch();

  const showColorTemplate = useSelector(colorTemplateState);

  const colorTemplateHandler = () => dispatch(showColorTemplateState(!showColorTemplate))

  return (
    <Styled.ColorSection>
      <Styled.BrandColorLabel style={{justifyContent: showColorTemplate ? 'flex-start' : 'center'}}>
        <Styled.SelectColorBtn
          onClick={colorTemplateHandler}
        >
          Brand Color
        </Styled.SelectColorBtn>
      </Styled.BrandColorLabel>

      {showColorTemplate && <ColorTemplate />}
    </Styled.ColorSection>
  );
});

export default BrandColor;
