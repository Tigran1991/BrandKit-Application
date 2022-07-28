import React from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { appCurrentState } from "./redux/features/app";
import FormsArea from "./BrandKitAppSections/Forms/FormsArea";
import CollectionsArea from "./BrandKitAppSections/Collections/CollectionsArea";

const BrandKitApp = () => {
  const dispatch = useDispatch();

  const brandKit = useSelector((state) => state.app);

  const brandKitAppHandler = () => dispatch(appCurrentState());

  return (
    <Styled.BrandKitBoard>
      <Styled.AddBrandKitBtn onClick={brandKitAppHandler}>
        {!brandKit.isOpen && <p>Open BrandKit</p>}

        {brandKit.isOpen && <p>Close BrandKit</p>}
      </Styled.AddBrandKitBtn>

      {/* <userBrandList /> */}

      {brandKit.isOpen && (
        <>
          <FormsArea />
          <CollectionsArea />
        </>
      )}
    </Styled.BrandKitBoard>
  );
};

export default BrandKitApp;
