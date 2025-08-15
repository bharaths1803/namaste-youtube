const VideoCard = ({ info }) => {
  console.log("Video info", info);

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img alt="Video image" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const VideoCardBordered = (VideoCard) => {
  return ({ info }) => {
    return (
      <div className="p-1 m-1 border border-red-900">
        <VideoCard info={info} />
      </div>
    );
  };
};

export default VideoCard;
