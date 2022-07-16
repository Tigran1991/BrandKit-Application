import styled from "styled-components";
import addFonts from "../../../../images/pen.png";

export const FontsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333;
  border-radius: 3px;
  margin-bottom: 10px;
`;

export const BrandsFontLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const SelectFontsBtn = styled.div`
  border: none;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  transition: 0.9ms linear;
  font-family: "Josefin Sans", sans-serif;
`;

export const FontsTemplate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(36, 33, 33);
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const AddFontsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: rgb(81, 81, 228);
  border: 0px;
  border-radius: 3px;
  font-family: "Anek Latin", sans-serif;
  font-size: 16px;
  color: #fff;
  background: url(${addFonts});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const UploadFonts = styled.div`
  display: flex;
`;

export const ResetFontsBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  cursor: pointer;
  background-color: rgb(81, 81, 228);
  border: 0px;
  border-radius: 3px;
  text-align: center;
  transition: 0.3ms linear;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  color: #fff;
`;
