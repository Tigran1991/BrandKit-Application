import React from "react";
import * as Styled from "./styled";
import { useState } from "react";
import CollectionColorItem from "./CollectionColorItem";
import { useDispatch } from "react-redux";
import { changeCollectionTitle } from "../../redux/features/collection";

const Collection = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(false);

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
              onChange={(e) => {
                dispatch(
                  e.target.value === ""
                    ? changeCollectionTitle({
                        id: props.collection.id,
                        title: "Title",
                      })
                    : changeCollectionTitle({
                        id: props.collection.id,
                        title: e.target.value,
                      })
                );
              }}
              onClick={(e) => console.log(e.currentTarget.id)}
            />
          </Styled.CollectionTitleForm>
        )}
        {!title && (
          <Styled.CollectionDefaultTitle onClick={() => setTitle(true)}>
            {props.collection.title}
          </Styled.CollectionDefaultTitle>
        )}
      </Styled.CollectionTitle>
    </Styled.CollectionItem>
  );
};

export default Collection;
