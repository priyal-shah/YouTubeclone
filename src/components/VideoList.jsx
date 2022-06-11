import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const renderList = videos.map((video, index) => {
    return <VideoItem video={video} onSelectVideo={onSelectVideo} key={index} />;
  });

  return (
    <>
      <div>{renderList}</div>
    </>
  );
};

export default VideoList;
