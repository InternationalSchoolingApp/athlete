import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-10">
        <div className="text-center lg:text-left">

          {/* <div className="g-t bg-gradient-to-r from-[#007EFF] to-[#192C99] bg-clip-text text-transparent mb-4 md:mb-7">
            <h1 className="text-xl md:text-4xl font-extrabold mb-1">
              BEYOND THE CLASSROOM:
            </h1>
            <p className="text-sm md:text-xl font-medium">
              EXCELLING IN ACADEMICS AND SPORTS TOGETHER
            </p>
          </div> */}

          <h2 className="uppercase text-center font-bold text-blue-800 text-3xl mb-2 md:mb-0"> Top Rated On</h2>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 gap-4 mb-4">
            <Image
              width={250}
              height={200}
              src={ImagePath.GOOGLE_RATING}
              alt="google-rating"
              className=""
            />
            <p className="text-2xl font-bold text-blue-800 hidden md:flex">&</p>
            <Image
              width={250}
              height={200}
              src={ImagePath.TRUSTPILOT_RATING}
              alt="trustpilot-rating"
              className=""
            />
          </div>



          <div className="mb-7">
            <p className=" text-justify">
              International Schooling, accredited by Cognia, USA and approved by National Collegiate Athletic Association (NCAA) and College Board is the most recommended and trusted online school. We are serving over 3500 student athletes from 135+ countries, playing more than 50 sports.
              {/* <br />
              <br /> */}
              {/* <span className="font-semibold text-blue-600">
                GOOD ACADEMIC PERFORMANCE & INTENSE SPORTS TRAINING
              </span> */}
            </p>
          </div>

          <Button
            message={"Talk to us"}
            url={"/contact"}
            buttonClass={"w-1/2 lg:w-1/3 uppercase"}
          />
        </div>

        <div className="w-full">
          <video
            // className="w-screen lg:h-[90svh] lg:object-cover"
            className="w-full md:h-[335px] rounded-xl md:shadow md:border lg:object-cover"
            src={"/ncaa-video-new.mp4"}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            playsInline
            data-ll-status="loaded"
          ></video>
          {/* <Image
            width={500}
            height={500}
            priority
            src={ImagePath.HERO_IMG}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="hero-image"
            className="lg:w-full mx-auto lg:mx-0 h-auto rounded-3xl"
            /> */}
        </div>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  my-4 justify-center items-center gap-4 lg:gap-10 py-2 px-2">
        <Image
          width={500}
          height={500}
          src={"/cognia.webp"}
          priority
          alt="cognia-logo"
          className="w-full md:w-[160px]"
        />
        <Image
          width={500}
          height={500}
          src={ImagePath.NCAA_LOGO}
          priority
          alt="ncaa-logo"
          className="w-full lg:w-1/5"
        />
        <Image
          width={500}
          height={500}
          src={"/advancED.webp"}
          priority
          alt="ncaa-logo"
          className="w-full lg:w-1/5"
        />
        <Image
          width={500}
          height={500}
          src={ImagePath.COLLEGEBOARD_LOGO}
          priority
          alt="college-logo"
          className="w-full lg:w-1/5"
        />
      </div>
      <div className="py-4 px-2 border rounded-xl shadow-xl">
        <h2 className="text-center text-xl  md:text-3xl mb-4 font-semibold text-blue-800">Scholarship for our athletes:</h2>
        <div className="grid grid-cols-2  md:grid-cols-3 items-center justify-center gap-2">
          <div className="flex items-center justify-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} className="h-auto fill-orange-400 self-center" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" /></svg>
            <h2 className="text-xs md:text-2xl  text-blue-600 font-bold absolute top-[70] w-max left-[5] px-2 bg-white border">Province- 10%</h2>
          </div>
          <div className="flex items-center justify-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} className="h-auto fill-orange-400 self-center" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" /></svg>
            <h2 className="text-xs md:text-2xl  text-blue-600 font-bold absolute top-[70] w-max left-[5] px-2 bg-white border">National- 15%</h2>
          </div>
          <div className="flex items-center justify-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} className="h-auto fill-orange-400 self-center" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" /></svg>
            <h2 className="text-xs md:text-2xl  text-blue-600 font-bold absolute top-[70] w-max left-[5] px-2 bg-white border">International- 20%</h2>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
