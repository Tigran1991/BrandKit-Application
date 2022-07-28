import React, { memo } from "react";
import * as Styled from "./styled";

const LogoTemplate = memo(() => {
  return (
    <Styled.LogoTemplate>
      <Styled.AddBrandLogo>
        <Styled.UploadLogo
          type="file"
          style={{ display: "none" }}
          id="download-logo"
        />
        <Styled.UploadLogoBtn htmlFor="download-logo"></Styled.UploadLogoBtn>
      </Styled.AddBrandLogo>

      <Styled.ResetLogoBtn type="reset" className="reset-btn">
        Reset
      </Styled.ResetLogoBtn>
    </Styled.LogoTemplate>
  );
});

export default LogoTemplate;
