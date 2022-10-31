import React from "react";

const VideoItem = ({ video, onVideoClick, display }) => {
  return (
    <li className="video-item" onClick={() => onVideoClick(video)}>
      <div className="wrapper">
        <img src={video.snippet.thumbnails.medium.url} alt="" className="thumbnail"/>
        <div className="info">
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
