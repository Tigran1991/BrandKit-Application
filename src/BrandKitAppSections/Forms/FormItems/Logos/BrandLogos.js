import React from "react";
import * as Styled from "./styled";
import LogoTemplate from "./LogosTemplate";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { logosTemplateCurrentState } from "../../../../redux/features/logoTemplate";

const BrandLogos = () => {
  const dispatch = useDispatch();

  const logosTemplate = useSelector((state) => state.logosTemplate);

  const showLogosTemplate = () => dispatch(logosTemplateCurrentState());

  return (
    <Styled.LogoSection>
      <Styled.BrandLogoLabel
        style={{
          justifyContent: logosTemplate.isOpen ? "flex-start" : "center",
        }}
      >
        <Styled.LogoBtn onClick={showLogosTemplate}>Brand Logos</Styled.LogoBtn>
      </Styled.BrandLogoLabel>
      {logosTemplate.isOpen && <LogoTemplate />}
    </Styled.LogoSection>
  );
};

export default BrandLogos;
