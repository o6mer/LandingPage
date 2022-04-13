import React, { useEffect } from "react";
import "../css/openPage.css";
import starImg from "../media/images/star_of_chaos_for_site.png";
import spaceImg from "../media/images/space.png";
import spaceVideo from "../media/videos/star_transition.mp4";
import ReactPlayer from "react-player";
import { useState } from "react";

export const OpenPage = ({ setFinOpening }: any) => {
  const [isSpaceVideoPlaying, setIsSpaceVideoPlaying] = useState(false);
  const [isSpaceVideoEnded, setIsSpaceVideoEnded] = useState(false);
  const [isSpaceVideoLoaded, setIsSpaceVideoLoaded] = useState(false);

  const starClickHandle = (e: any) => {
    const img = e.target;
    img.classList.remove("spin");
    img.classList.add("spin-faster");
  };

  useEffect(() => {
    console.log(isSpaceVideoEnded);
  }, [isSpaceVideoEnded, isSpaceVideoLoaded]);

  return (
    <>
      {isSpaceVideoEnded ? (
        setFinOpening(true)
      ) : (
        <div className="open-page-container">
          <img
            className="star-img spin"
            src={starImg}
            alt=""
            onClick={(e) => {
              setIsSpaceVideoPlaying(true);
              starClickHandle(e);
            }}
          />
          <img src={spaceImg} alt="" className="space-img" />
          <ReactPlayer
            url={spaceVideo}
            className="space-vid"
            type="video/mp4"
            muted
            playing={isSpaceVideoPlaying}
            // onReady={() => setIsSpaceVideoLoaded(true)}
            onEnded={() => setIsSpaceVideoEnded(true)}
          ></ReactPlayer>
        </div>
      )}
    </>
  );
};
