import React from "react";
import * as Styled from "./styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Collection from "./Collection";
import EmptyArea from "./CollectionsAreasTypes/EmptyArea";

const CollectionsArea = () => {
  const collections = useSelector((state) => state.collection.collectionItems);
  const isCollectionFull = useSelector(
    (state) => state.isCollectionFull.isCollectionFull
  );

  return (
    <Styled.CollectionsContainer>
      {!isCollectionFull ? (
        <EmptyArea />
      ) : (
        collections.item.map((collection) => {
          return (
            <Collection key={collection} collectionColours={collections} />
          );
        })
      )}
    </Styled.CollectionsContainer>
  );
};

export default CollectionsArea;
