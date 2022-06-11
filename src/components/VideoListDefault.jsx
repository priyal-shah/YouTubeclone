// import React from "react";
// import VideoListDefaultItem from "./VideoListDefaultItem";

// const VideoListDefault = ({ videos, onSelectVideo }) => {
//   const renderList = videos.map((video, index) => {
//     return <VideoListDefaultItem video={video} onSelectVideo={onSelectVideo} key={index} />;
//   });

//   return (
//     <>
//       <div>{renderList}</div>
//     </>
//   );
// };

// export default VideoListDefault;


import React from "react";
import VideoListDefaultItem from "./VideoListDefaultItem";

const VideoListDefault = ({ videos, onSelectVideo }) => {
  const renderList = videos.map((video, index) => {
    return <VideoListDefaultItem video={video} onSelectVideo={onSelectVideo} key={index} />;
  });

  return (
    <>
      <div>{renderList}</div>
    </>
  );
};

export default VideoListDefault;
