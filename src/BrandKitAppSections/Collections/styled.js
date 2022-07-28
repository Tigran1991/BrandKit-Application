import styled from "styled-components";

export const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 30vh;
`;

export const CollectionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  width: 190px;
  height: 190px;
  border: 1px solid #fff;
  cursor: pointer;
  background-color: #968f8f;
  transition: 0.3s linear;
  background-size: cover;
  background-color: #fff;
  background-position: inherit;
  border-radius: 6px;
`;

export const DeleteItemBtn = styled.div`
display: flex;
position absolute;
top: 0;
right: 0;
width: 10px;
height: 10px;
`;

export const CollectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -23px;
  width: 90%;
`;

export const CollectionTitleForm = styled.div`
  display: flex;
`;

export const CollectionSelectedTitle = styled.div`
  display: flex;
  width: 100%;
  outline: none;
  border: none;
  background-color: #333;
  color: #fff;
`;

export const CollectionDefaultTitle = styled.div`
  display: flex;
  height: 10%;
  outline: none;
  font-family: "Josefin Sans", sans-serif;
`;

export const ColorItem = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
`;

export const EmptyArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-family: "Anek Latin", sans-serif;
`;
