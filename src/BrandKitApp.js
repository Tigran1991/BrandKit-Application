import React from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import FormArea from "./BrandKitAppSections/Form/FormArea";
import CollectionArea from "./BrandKitAppSections/Collections/CollectionArea";
import { appSelectedState } from "./redux/features/BrandKitAppReducerSlice";
import { brandKitAppState } from "./redux/features/BrandKitAppReducerSlice";
import { selectedCollections } from "./redux/features/UserCollectionsReducerSlice";
import { resetColors } from "./redux/features/ColorDivCollectionReducerSlice.js";

const BrandKitApp = () => {
  const dispatch = useDispatch();

  const brandKitAppHandler = () => {
    dispatch(appSelectedState(!isBrandKitAppRun));
    dispatch(resetColors([]));
  }

  const isBrandKitAppRun = useSelector(brandKitAppState);
  const brandKitCollections = useSelector(selectedCollections);

  return (
    <Styled.BrandKitBoard>
      <Styled.AddBrandKitBtn
        onClick={brandKitAppHandler}
      >
        {!isBrandKitAppRun && <p>Open BrandKit</p>}

        {isBrandKitAppRun && <p>Close BrandKit</p>}
      </Styled.AddBrandKitBtn>

      {/* <userBrandList /> */}

      {isBrandKitAppRun && (
        <>
          <FormArea formData={brandKitCollections} />
          <CollectionArea collectionData={brandKitCollections} />
        </>
      )}
    </Styled.BrandKitBoard>
  );
};

export default BrandKitApp;
