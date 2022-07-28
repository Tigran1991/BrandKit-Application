import React from "react";
import * as Styled from "./styled";
import { useState } from "react";
import CollectionItemColors from "./CollectionItemColors";

const Collection = (props) => {
  const [title, setTitle] = useState(false);
  const [currentTitle, setCurrentTitle] = useState();

  const titleHandler = (event) => {
    setCurrentTitle(event.target.value);
  };

  const submitHandler = () => {
    setTitle(false);
  };

  return (
    <Styled.CollectionItem>
      <>
        {props.collectionColours.colours.map((itemColor) => {
          return <CollectionItemColors color={itemColor} />;
        })}
      </>
      <Styled.CollectionTitle>
        {title && (
          <Styled.CollectionTitleForm onSubmit={submitHandler}>
            <Styled.CollectionSelectedTitle
              type="text"
              onChange={titleHandler}
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
