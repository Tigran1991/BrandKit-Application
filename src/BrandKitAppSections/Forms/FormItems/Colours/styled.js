import styled from "styled-components";
import adderLogo from "../../../../images/plus.png";

export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333;
  border-radius: 3px;
  margin-bottom: 10px;
`;

export const BrandColorLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

export const SelectColorBtn = styled.div`
  border: none;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  transition: 0.9ms linear;
  font-family: "Josefin Sans", sans-serif;
`;

export const ColorTemplate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(36, 33, 33);
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const ColorsArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: flex-start;
`;

export const AddBrandColors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 15%;
  height: 160px;
  cursor: pointer;
  border-radius: 3px;
  margin-left: 9px;
  margin: 10px 0px 10px 0px;
  background-color: #333;
  border-radius: 9px;
  transition: 1ms linear;
  margin-right: 10px;
`;

export const SelectedColors = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
`;

export const SaveColorsBtn = styled.div`
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

export const SelectedColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  cursor: pointer;
  border: 0px;
  border-radius: 3px;
  margin-left: 9px;
  margin: 10px 0px 10px 0px;
  border-radius: 9px;
  position: relative;
  border: 1px solid #fff;
  margin-right: 1px;
`;

export const Colors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 0px;
  right: 0px;
  background-color: #968f8f;
  transition: 0.3s linear;
  cursor: pointer;
  border: none;
  color: #fff;
`;

export const BrandColoursBtnArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const BrandColorsAdderBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 15%;
  height: 160px;
  cursor: pointer;
  border: 2px dotted #333;
  border-radius: 3px;
  margin-left: 9px;
  margin: 10px 0px 10px 0px;
  background-color: #fff;
  border-radius: 9px;
  transition: 1ms linear;
  margin-right: 10px;
`;

export const AddBrandColorBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: rgb(81, 81, 228);
  border: 0px;
  border-radius: 3px;
  font-family: "Anek Latin", sans-serif;
  font-size: 16px;
  color: #fff;
  background: url(${adderLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ChromePickerDiv = styled.div`
  position: absolute;
  top: 160px;
`;
