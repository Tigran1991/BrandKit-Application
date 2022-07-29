import React from "react";
import * as Styled from "./styled";
import { useState } from "react";
import CollectionItemColours from "./CollectionItemColours";
import { generateId } from "../../utils";
import { useDispatch } from "react-redux";

const Collection = (props) => {
  const [title, setTitle] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Title");

  const submitTitle = () => {
    setTitle(false);
  };

  return (
    <Styled.CollectionItem>
      <>
        {props.collection.colours.map((color) => {
          return <CollectionItemColours color={color} key={generateId()} />;
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
