import { useEffect, useState } from "react";
import { YOUTUBE_VEDIO_API } from "../utils/constants";
import VideoCard, { VideoCardBordered } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const HOC = VideoCardBordered(VideoCard);

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
      {videos[0] && <HOC info={videos[0]} />}
      {videos.map((video, idx) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={videos[idx]} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
