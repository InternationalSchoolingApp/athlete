import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-20 mt-10 gap-5 md:gap-10">
        <div className="text-center lg:text-left">
          <div className="g-t bg-gradient-to-r from-[#007EFF] to-[#192C99] bg-clip-text text-transparent mb-7">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-1">
              BEYOND THE CLASSROOM:
            </h1>
            <p className="text-2xl md:text-4xl font-medium">
              EXCELLING IN ACADEMICS AND SPORTS TOGETHER
            </p>
          </div>

          <div className="flex mb-7 gap-3 lg:items-center">
            <h4 className="text-lg md:text-2xl font-semibold text-black">
              ✔ Accredited.
            </h4>
            <h4 className="text-lg md:text-2xl font-semibold text-black">
              ✔ Approved.
            </h4>
            <h4 className="text-lg md:text-2xl font-semibold text-black">
              ✔ Recognized.
            </h4>
          </div>

          <div className="mb-7">
            <p className="font-medium">
              International Schooling, accredited by Cognia, USA and approved by
              National Collegiate Athletic Association (NCAA) is the most
              recommended and trusted online school.
              <br />
              <br />
              <span className="font-semibold">
                GOOD ACADEMIC PERFORMANCE & INTENSE SPORTS TRAINING
              </span>
            </p>
          </div>

          <Button
            message={"Let's Connect"}
            url={"/contact"}
            buttonClass={"w-1/2 lg:w-1/3"}
          />
        </div>

        <div className="w-full">
          <Image
            width={500}
            height={500}
            priority
            src={ImagePath.HERO_IMG}
            layout="responsive"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="hero-image"
            className="lg:w-full mx-auto lg:mx-0 h-auto rounded-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
