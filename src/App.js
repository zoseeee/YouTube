import React, { useCallback, useEffect, useState } from "react";
// import response from "./response.json";
import VideoList from "./component/VideoList";
import "./css/Main.scss";
import SearchHeader from "./component/SearchHeader";
import VideoDetail from "./component/VideoDetail";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  // useEffect(() => {
  //   setVideos(response.items);
  // }, []);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, []);

  const search = useCallback((query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((item) => setVideos(item));
  }, []);

  return (
    <div className="Wrapper">
      <SearchHeader onSearch={search} />
      <div className="content">
        {selectedVideo && (
          <div className="detail">
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className="list">
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
