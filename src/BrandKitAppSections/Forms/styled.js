import styled from "styled-components";

export const BrandKitForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
`;

export const SaveCollection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
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
  margin-bottom: 20px;

  :hover {
    background-color: rgb(139, 139, 216);
  }
`;
