import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("Url v values", searchParams.get("v"));

  return (
    <div className="px-5">
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/MZETIoZlLC4?si=bYYSeZLn8yyfN3-k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
