import React, { useEffect, useState } from "react";
import { OpenPage } from "./OpenPage";
import ReactPlayer from "react-player";
import backgroundVid from "../media/videos/home_page_background.mp4";
import "../css/home.css";
import { Main_Container } from "./MainContainer";

export const HomePage = () => {
  const [finOpening, setFinOpening] = useState(false);

  return finOpening ? (
    <>
      <header className="home-page-container">
        <ReactPlayer
          url={backgroundVid}
          className="dude-video"
          type="video/mp4"
          muted
          loop
          playing={true}
          width={"100%"}
          height={"100%"}
          style={{ position: "absolute", zIndex: -1 }}
        ></ReactPlayer>
        <Main_Container />
      </header>
    </>
  ) : (
    <OpenPage setFinOpening={setFinOpening} />
  );
};
