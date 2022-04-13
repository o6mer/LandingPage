import React from "react";
import "../css/main-nav.css";
import logoImg from "../media/images/logo.png";
import { useState, useEffect } from "react";

export const NavContainer = ({ setSelectedSectionName }: any) => {
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
      className={`nav-container section-container fadein ${
        fadeout ? "fadeout" : ""
      }`}
    >
      <img src={logoImg} className="logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <a
            href="#collection"
            className="nav-link"
            id="collection"
            onClick={selectHandler}
          >
            collection
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#nav"
            className="nav-link"
            id="main-nav"
            onClick={selectHandler}
          >
            Nav
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#test3"
            className="nav-link"
            id="test3"
            onClick={selectHandler}
          >
            test3
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#chat"
            className="nav-link"
            id="test3"
            onClick={selectHandler}
          >
            chat
          </a>
        </li>
      </ul>
    </section>
  );
};
