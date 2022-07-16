import styled from "styled-components";

export const BrandKitBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Work Sans", sans-serif;
  width: 100%;
  height: 100%;
  background-color: #333;
  padding: 10px;
`;

export const AddBrandKitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
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
  margin-bottom: 10px;

  :hover {
    background-color: rgb(139, 139, 216);
  }
`;