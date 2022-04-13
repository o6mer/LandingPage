import React, { useEffect, useState } from "react";
import "../css/collection.css";
import testImg from "../media/images/logo.png";

export const CollectionContainer = ({ setSelectedSectionName }: any) => {
  const [fadeout, setFadeout] = useState(false);

  const selectHandler = (e: any) => {
    e.preventDefault();

    setFadeout(true);
    setTimeout(() => {
      setSelectedSectionName(e.target.id);
    }, 500);
  };

  return (
    <section
      className={`collection-container section-container fadein ${
        fadeout ? "fadeout" : ""
      }`}
    >
      <a href="#nav">
        <img
          src={testImg}
          alt=""
          className="test-img"
          id="main-nav"
          onClick={selectHandler}
        />
      </a>
      <h1>collection</h1>
    </section>
  );
};
