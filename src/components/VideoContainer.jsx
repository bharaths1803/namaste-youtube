import { useEffect, useState } from "react";
import { YOUTUBE_VEDIO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VEDIO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video, idx) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={videos[idx]} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
