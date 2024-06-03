import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";

const Accreditation = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-7 lg:gap-10 bg-gradient-to-r from-[#A3B1FF4D] to-[#FFCACA4D] p-10 rounded-3xl mt-16">
        <Image
          width={500}
          height={500}
          src={ImagePath.COGNIA_LOGO}
          priority
          alt="cognia-logo"
          className="w-1/2 lg:w-1/5"
        />
        <Image
          width={500}
          height={500}
          src={ImagePath.COLLEGEBOARD_LOGO}
          priority
          alt="cognia-logo"
          className="w-1/2 lg:w-1/5"
        />
        <Image
          width={500}
          height={500}
          src={ImagePath.NCAA_LOGO}
          priority
          alt="cognia-logo"
          className="w-1/2 lg:w-1/5"
        />
      </div>
    </>
  );
};

export default Accreditation;
