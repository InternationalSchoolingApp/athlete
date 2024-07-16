// import ImagePath from "constant/ImagePath";
// import Image from "next/image";
import React from "react";

const Accreditation = () => {
  return (
    <div className="my-4">
      <div className="bg-gradient-to-r from-[#A3B1FF4D] to-[#FFCACA4D]  py-1 px-2 rounded md:rounded-3xl border">
        {/* <div className="flex flex-col lg:flex-row  my-4 justify-center items-center gap-4 lg:gap-10 bg-gradient-to-r from-[#A3B1FF4D] to-[#FFCACA4D]  py-4 px-2 rounded-3xl border"> */}
        {/* <Image
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
      /> */}
        <h2 className="text-sm md:text-4xl font-semibold text-blue-600">American Online School For Student Athletes</h2>
        <p className="font-semibold text-left text-xs">YOUR SCHOOL | YOUR LOCATION | YOUR TIME</p>
      </div>
      <div className="flex uppercase  gap-3 lg:items-center justify-center ">
        <h4 className="text-sm md:text-xl text-black">
          <span className="text-green-600">✔ </span>Accredited
        </h4>
        <h4 className="text-sm md:text-xl text-black">
          <span className="text-green-600">✔ </span>Approved
        </h4>
        <h4 className="text-sm md:text-xl text-black">
          <span className="text-green-600">✔ </span>Recognized
        </h4>
      </div>
      <div className="mb-3 py-3 px-2 md:px-6 bg-blue-100 border rounded ">
        <h2 className="text-blue-800 text-sm md:text-xl text-center uppercase font-semibold">Athlete  Discount<span className=" font-black font-mono	md:text-3xl text-red-500 animate-ping "> upto  20%</span></h2>
      </div>
    </div>
  );
};

export default Accreditation;
