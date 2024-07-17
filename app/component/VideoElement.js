"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const VideoElement = ({ image, url, playButton }) => {
  const DynamicModal = dynamic(() => import("./VideoPlayer"), { ssr: false });

  const [isOpen, setIsOpen] = useState(false);

  const handleVideo = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:h-[280px] h-[220px]">
      {!isOpen && (
        <div onClick={handleVideo} className="w-full cursor-pointer md:w-[500px]">
          <div className="relative flex items-center justify-center group">
            <svg
              className={`absolute fill-[#027FFF] group-hover:fill-blue-700 duration-150 cursor-pointer md:w-[80px] md:h-[80px] w-[60px] h-[60px] animate-pulse group-hover:animate-none group-hover:scale-105 ${playButton}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              stroke="#F7FBFF"
              strokeWidth={"10px"}
              strokeLinejoin="round"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
            <Image
              width={1000}
              height={1000}
              alt={image}
              src={image}
              className="rounded-2xl border-2 w-max"
            />
          </div>
        </div>
      )}
      {isOpen && <DynamicModal url={url} onClose={handleClose} />}
    </div>
  );
};

export default VideoElement;
