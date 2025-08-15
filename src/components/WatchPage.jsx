import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("Url v values", searchParams.get("v"));

  return (
    <div className="mt-5 flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="1000"
            height="600"
            src="https://www.youtube.com/embed/MZETIoZlLC4?si=bYYSeZLn8yyfN3-k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
