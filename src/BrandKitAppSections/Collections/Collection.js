import React from "react";
import * as Styled from "./styled";
import { useState } from "react";
import CollectionColorItem from "./CollectionColorItem";
import { generateId } from "../../utils";

const Collection = (props) => {
  console.log(props);
  const [title, setTitle] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Title");

  const submitTitle = () => {
    setTitle(false);
  };

  return (
    <Styled.CollectionItem>
      <>
        {props.collection.colours.map((color) => {
          return (
            <CollectionColorItem
              color={color}
              key={props.collection.colours.indexOf(color)}
            />
          );
        })}
      </>
      <Styled.CollectionTitle>
        {title && (
          <Styled.CollectionTitleForm onSubmit={submitTitle}>
            <Styled.CollectionSelectedTitle
              type="text"
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
          </Styled.CollectionTitleForm>
        )}
        {!title && (
          <Styled.CollectionDefaultTitle onClick={() => setTitle(true)}>
            {currentTitle}
          </Styled.CollectionDefaultTitle>
        )}
      </Styled.CollectionTitle>
    </Styled.CollectionItem>
  );
};

export default Collection;
