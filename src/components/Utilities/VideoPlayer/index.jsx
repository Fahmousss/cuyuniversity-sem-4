import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "100%",
    height: "400",
  };

  return (
    <>
      <YouTube
        videoId={youtubeId}
        onReady={(e) => e.target.pauseVideo()}
        opts={option}
      />
    </>
  );
};

export default VideoPlayer;
