import React from "react";
import Button from "./Button";
import ImagePath from "constant/ImagePath";
import Image from "next/image";

const content = [
  {
    svg: ImagePath.HONORS_ICON,
    alt: "honors",
    count: "12000+",
    name: "Students",
  },
  {
    svg: ImagePath.MAP_ICON,
    alt: "map",
    count: "135+",
    name: "Countries",
  },
  {
    svg: ImagePath.PROFILE_ICON,
    alt: "profile",
    count: "500+",
    name: "Teachers",
  },
];

const SportsStars = () => {
  return (
    <>
      <div className="bg-[#0E083F] mt-10 p-10 flex flex-col lg:flex-row justify-between items-center rounded-3xl gap-10">
        <div className="">
          <h3 className="text-[#2949FF] font-extrabold text-xl lg:text-4xl text-center lg:text-left">
            These are some of our <br />
            <span className="text-white">SPORTS STARS:</span>
          </h3>
          <p className="text-white font-medium mt-3 mb-5 text-center lg:text-left">
            Winning Medals in Sports & Getting A+ Grades in Class
          </p>
          <Button
            message={"Talk to us!"}
            url={"/contact"}
            buttonClass={"w-2/3 lg:w-1/2"}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-4/5 relative">
          {content.map((item, index) => (
            <div key={index} className="overflow-hidden">
              {(item.count === "12000+" || item.count === "135+") && (
                <div className="lg:w-0.5 w-40 h-0.5 lg:h-36 lg:bg-gradient-to-t bg-gradient-to-r from-transparent via-[#2949FF] to-transparent absolute z-20 lg:ml-52 -ml-6 mt-32 lg:mt-0"></div>
              )}
              <Image
                width={200}
                height={200}
                src={item.svg}
                alt={item.alt}
                className="w-10 mx-auto mb-2"
              />
              <p className="text-[#2949FF] font-extrabold text-3xl lg:text-4xl text-center">
                {item.count}
              </p>
              <p className="text-white font-medium text-lg lg:text-xl text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 lg:mt-16 flex flex-col items-center">
        <h3 className="font-bold text-black text-center text-lg lg:text-2xl mb-6 ">
          MAKE THE RIGHT CHOICE FOR YOUR CHILD <br />
          FULFILL YOUR CHILD'S DREAMS
        </h3>
        <Button
          message={"BOOK A FREE LIVE SCHOOL DEMO"}
          url={"https://enroll.internationalschooling.org/demo/"}
          buttonClass={"w-full lg:w-1/2"}
        />
      </div>
    </>
  );
};

export default SportsStars;
