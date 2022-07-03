import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Form from "./BrandKitAppSections/Form/Form";
import CollectionStorage from "./BrandKitAppSections/Collections/CollectionStorage";
import { appSelectedState } from "./redux/features/BrandKitAppReducerSlice";
import { selectBrandKitAppState } from "./redux/features/BrandKitAppReducerSlice";
import { selectedCollections } from "./redux/features/UserCollectionsReducerSlice";

const BrandKitApp = () => {
  const dispatch = useDispatch();

  const BRAND_KIT_APP = useSelector(selectBrandKitAppState);
  const BRAND_KIT_COLLECTIONS = useSelector(selectedCollections);

  return (
    <div className="brand-kit-board">
      <button
        className="add-brand-kit-btn"
        onClick={() => dispatch(appSelectedState(!BRAND_KIT_APP))}
      >
        {!BRAND_KIT_APP &&
          <p>Add BrandKit</p>
        }

        {BRAND_KIT_APP &&
          <p>Close BrandKit</p>
        }
      </button>

      {BRAND_KIT_APP && (
        <>
          <Form formData={BRAND_KIT_COLLECTIONS} />
          <CollectionStorage collectionData={BRAND_KIT_COLLECTIONS} />
        </>
      )}
    </div>
  );
};

export default BrandKitApp;
