import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className={display === "list" ? "video-list list" : "video-list flex"}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
