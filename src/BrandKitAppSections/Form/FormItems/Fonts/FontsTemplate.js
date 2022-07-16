import React, { memo } from "react";
import * as Styled from './styled';

const FontsTemplate = memo(() => {

  return (
    <Styled.FontsTemplate>
      <Styled.AddFontsBtn>
          <Styled.UploadFonts type="file" style={{ display: "none" }} />
      </Styled.AddFontsBtn>
        <Styled.ResetFontsBtn type="reset">
          Reset
        </Styled.ResetFontsBtn>
    </Styled.FontsTemplate>
  );
});

export default FontsTemplate;
