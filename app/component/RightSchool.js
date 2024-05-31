import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";

const content = [
  {
    svg: ImagePath.MEDAL_ICON,
    alt: "medal",
    para: "72% district, 16% national & 9% International level athletes in our student community.",
  },
  {
    svg: ImagePath.DOCTOR_ICON,
    alt: "doctor",
    para: "We give all our students free counselling on sports psychology and injury management.",
  },
  {
    svg: ImagePath.BRAIN_ICON,
    alt: "brain",
    para: "We provide concept-building and doubt building sessions to all our students.",
  },
  {
    svg: ImagePath.TIME_ICON,
    alt: "time",
    para: "99% of our students spend less than 2 hours per day with us to excel in their studies.",
  },
];

const RightSchool = () => {
  return (
    <>
      <div className="">
        <h3 className="text-[#2949FF] font-extrabold lg:text-4xl text-xl mb-2 mt-10">
          The Right School For <br />
          Future Champions :
        </h3>
        <p className="text-black font-medium lg:w-1/2">
          International Schooling is Cognia-accredited K-12 Online School
          connects students across 120 countries to achieve career dreams
          without sacrificing education.
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
          {content.map((item, index) => (
            <div key={index} className="card mt-5">
              <div className="card-body bg-white rounded-2xl p-3 shadow-md">
                <Image
                  width={100}
                  height={100}
                  src={item.svg}
                  alt={item.alt}
                  className="w-10 h-10 mx-auto"
                />
                <p className="lg:mt-5 mt-3 text-center">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSchool;
