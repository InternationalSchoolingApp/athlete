import React from "react";
import Button from "./Button";
import ImagePath from "constant/ImagePath";
import Image from "next/image";

const content = [
  {
    svg: ImagePath.HONORS_ICON,
    alt: "honors",
    count: "14000+",
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
    count: "600+",
    name: "Teachers",
  },
  {
    svg: ImagePath.STUDENT_ATHLETE,
    alt: "athlete",
    count: "3500+",
    name: "Student Athletes",
  },
];

const SportsStars = () => {
  return (
    <>
      <div className=" grid grid-cols-2  lg:grid-cols-4 lg:divide-x lg:divide-blue-700 bg-[#0E083F] mt-10 p-4 md:p-10  justify-between items-center rounded-3xl gap-4 lg:gap-0">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col justify-center w-full">
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
            <p className="text-white font-medium lg:text-xl text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-16 flex flex-col items-center">
        <h3 className="font-bold text-black text-center lg:text-2xl mb-6 ">
          MAKE THE RIGHT CHOICE FOR YOUR CHILD &
          FULFILL THEIR DREAMS
        </h3>
        <Button
          message={"BOOK A FREE LIVE SCHOOL DEMO"}
          url={"https://enroll.internationalschooling.org/demo/"}
          target={"_blank"}
          referrerPolicy={"no-referrer"}
          buttonClass={"w-full lg:w-1/2"}
        />
      </div>
    </>
  );
};

export default SportsStars;
