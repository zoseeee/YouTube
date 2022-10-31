import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <section>
      <iframe
        title="This is a unique title"
        className="selected-video"
        type="text/html"
        width="100%"
        height="600px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="video-info">
        <h2>{video.snippet.title}</h2>
        <p className="channelTitle">{video.snippet.channelTitle}</p>
        <p className="description">{video.snippet.description}</p>
      </div>
    </section>
  );
};

export default VideoDetail;
