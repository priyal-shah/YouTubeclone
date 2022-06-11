import React from "react";

const VideoListDefaultItem = ({ video, onSelectVideo }) => {
  if(!video){
    return (
      <>
      <div>
        no video...
      </div>
      </>
    );
  }
  return (
    <>
      <div
        className="col-md-12 videoComponent"
        onClick={() => {
          onSelectVideo(video);
        }}
      >
        <div className="row border p-2 " style={{ cursor: "pointer" }}>
          <div className="col-md-12">
            <img
              height="150px"
              width="250px"
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
            />
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-2 mt-2">
              <i class="bi bi-person-circle col-md-1 m-2 m-md-3 extra_ions" title="Notifications"></i>
              </div>
              <div className="col-8">
                  <h6>{video.snippet.title}</h6>
                <h6>{video.snippet.channelTitle}</h6>
              </div>
              <div className="col-1 mt-2"><i class="bi bi-three-dots-vertical extra_ions"></i></div>
            </div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoListDefaultItem;
