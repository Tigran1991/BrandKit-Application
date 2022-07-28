import styled from "styled-components";
import addLogo from '../../../../images/add.png';

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333;
  border-radius: 3px;
  margin-bottom: 10px;
  font-family: "Permanent Marker", cursive;
  font-family: "Work Sans", sans-serif;
`;

export const BrandLogoLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

export const LogoBtn = styled.div`
  border: none;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  transition: 0.9ms linear;
  font-family: "Josefin Sans", sans-serif;
`;

export const LogoTemplate = styled.div`
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

export const AddBrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 160px;
  cursor: pointer;
  border: 0px;
  border-radius: 3px;
  margin-left: 9px;
  margin: 10px 0px 10px 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 9px;
`;

export const UploadLogo = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
`;

export const UploadLogoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 43px;
  cursor: pointer;
  background-color: rgb(81, 81, 228);
  border: 0px;
  border-radius: 3px;
  font-family: "Anek Latin", sans-serif;
  font-size: 16px;
  color: #fff;
  background: url(${addLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ResetLogoBtn = styled.div`
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
