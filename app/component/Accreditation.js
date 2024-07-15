import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";

const Accreditation = () => {
  return (
    <div className="flex flex-col lg:flex-row  my-4 justify-center items-center gap-4 lg:gap-10 bg-gradient-to-r from-[#A3B1FF4D] to-[#FFCACA4D] p-5 md:p-10 rounded-3xl ">
      <Image
        width={500}
        height={500}
        src={ImagePath.NCAA_LOGO}
        priority
        alt="ncaa-logo"
        className="w-1/3 lg:w-1/5"
      />
      <Image
        width={500}
        height={500}
        src={ImagePath.COLLEGEBOARD_LOGO}
        priority
        alt="college-logo"
        className="w-1/3 lg:w-1/5"
      />
      <Image
        width={500}
        height={500}
        src={ImagePath.COGNIA_LOGO}
        priority
        alt="cognia-logo"
        className="w-1/3 lg:w-1/5"
      />
    </div>
  );
};

export default Accreditation;
