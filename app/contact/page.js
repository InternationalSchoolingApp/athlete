import ImagePath from "constant/ImagePath";
import React from "react";
import Image from "next/image";
import PPCForm from "component/PPCForm";

const contact = () => {
  return (
    <div className="r-w flex flex-col lg:flex-row justify-center items-center pt-10 gap-10 !mb-12">
      <div className="text-black-800 w-3/4">
        <h1 className="g-t bg-gradient-to-r from-[#001FCF] to-[#007EFF] text-2xl lg:text-6xl font-bold mb-6 text-center lg:text-left">
          TALK TO US
        </h1>
        <p className="text-black-600 text-sm text-justify mb-6">
          Our counselors are trained and certified to create a safe space for
          you and your child. Their expertise and years of experience makes them
          the best at creating a special and customized learning plan for your
          child.
        </p>
        <Image
          src={ImagePath.CONTACT_IMG}
          className="h-auto"
          width={400}
          height={400}
          priority
          alt="map_image"
        />
      </div>
      <div className="lg:w-2/3 w-full">
        <h2 className="text-xl font-bold mb-4 text-center">
          Fill The Form To Know More
        </h2>
        <PPCForm folderName={"Sports"} />
      </div>
    </div>
  );
};

export default contact;