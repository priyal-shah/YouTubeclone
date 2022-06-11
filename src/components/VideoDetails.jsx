import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <div>
        <iframe
          src={videoSrc}
          title="video Player"
          className="w-100"
          style={{ height: "380px" }}
        ></iframe>
      </div>
      <div className="border p-2">
        <h6 className="text-warning">{video.kind}</h6>
        <h4>{video.snippet.title}</h4>
        <h5 className="text-danger">{video.snippet.channelTitle}</h5>
        <h8 className="text-primary">Published at : {video.snippet.publishedAt}</h8>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetails;
