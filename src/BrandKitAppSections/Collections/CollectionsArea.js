import React from "react";
import * as Styled from "./styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Collection from "./Collection";
import EmptyArea from "./CollectionsAreasTypes/EmptyArea";

const CollectionsArea = () => {
  const collectionData = useSelector((state) => state.collection);

  const isCollectionFull = useSelector(
    (state) => state.isCollectionFull.isCollectionFull
  );

  return (
    <Styled.CollectionsContainer>
      {!isCollectionFull ? (
        <EmptyArea />
      ) : (
        collectionData.collection.map((collection) => {
          return <Collection key={collection.id} collection={collection} />;
        })
      )}
    </Styled.CollectionsContainer>
  );
};

export default CollectionsArea;
