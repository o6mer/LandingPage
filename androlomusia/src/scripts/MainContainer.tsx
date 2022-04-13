import React, { useEffect, useState } from "react";
import { NavContainer } from "./NavContainer";
import { CollectionContainer } from "./CollectionContainer";
import { Test3 } from "./Test3";

export const Main_Container = () => {
  const [selectedSectionName, setSelectedSectionName] = useState("main-nav");
  const [fadeout, setFadeout] = useState(false);

  if (selectedSectionName === "main-nav")
    return (
      <div className="main-container">
        <NavContainer
          setSelectedSectionName={setSelectedSectionName}
          fadeout={fadeout}
        />
      </div>
    );
  if (selectedSectionName === "collection")
    return (
      <div className="main-container">
        <CollectionContainer setSelectedSectionName={setSelectedSectionName} />
      </div>
    );
  if (selectedSectionName === "test3")
    return (
      <div className="main-container">
        <Test3 setSelectedSectionName={setSelectedSectionName} />
      </div>
    );
  else return <h1>Error</h1>;
};
