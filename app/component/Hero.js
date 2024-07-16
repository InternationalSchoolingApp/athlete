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
        <div className="grid grid-cols-3 items-center justify-evenly gap-2">
          <div className="flex items-center justify-center">
            <Image src={"/trophy_p.png"} width={180} height={200} className="w-[140px] md:w-auto h-auto" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={"/trophy_n.png"} width={180} height={200} className="w-[140px] md:w-auto h-auto" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={"/trophy_i.png"} width={180} height={200} className="w-[140px] md:w-auto h-auto" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
