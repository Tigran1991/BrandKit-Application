import React from "react";
import * as Styled from "./styled";
import LogoTemplate from "./LogoTemplate";

import { useDispatch, useSelector } from "react-redux";
import {
  logoTemplateState,
  showLogoTemplateState,
} from "../../../../redux/features/form-items-templates/LogoTemplateReducerSlice";

const BrandLogo = () => {
  const dispatch = useDispatch();

  const showLogoTemplate = useSelector(logoTemplateState);

  return (
    <Styled.LogoSection>
      <Styled.BrandLogoLabel template={showLogoTemplate}
        style={{ justifyContent: showLogoTemplate ? "flex-start" : "center" }}
      >
        <Styled.LogoBtn
          onClick={() => dispatch(showLogoTemplateState(!showLogoTemplate))}
        >
          Brand Logo
        </Styled.LogoBtn>
      </Styled.BrandLogoLabel>
      {showLogoTemplate && <LogoTemplate />}
    </Styled.LogoSection>
  );
};

export default BrandLogo;
