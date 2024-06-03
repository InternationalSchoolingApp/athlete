import React from "react";

const VideoPlayer = ({ url }) => {
  return (
    <div className="">
      <iframe
        className="lg:w-[500px] w-[90vw] lg:h-[280px] h-[220px] lg:rounded-2xl"
        src={url}
        title="IS Video"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
