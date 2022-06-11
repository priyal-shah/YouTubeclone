import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <>
      <div
        className="col-md-12"
        onClick={() => {
          onSelectVideo(video);
        }}
      >
        <div className="row border p-2" style={{ cursor: "pointer" }}>
          <div className="col-5">
            <img
              height="130px"
              width="180px"
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
            />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-1">fd</div>
              <div className="col-10">
                <h6>{video.snippet.title}</h6>
                <h6>{video.snippet.channelTitle}</h6></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
