import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";

const content = [
  {
    svg: ImagePath.MEDAL_ICON,
    alt: "medal",
    para: "Over 3500 athletes from our student community playing at International, National and Province levels.",
  },
  {
    svg: ImagePath.DOCTOR_ICON,
    alt: "doctor",
    para: "We offer free counselling on sports psychology and injury management to our student athletes.",
  },
  {
    svg: ImagePath.BRAIN_ICON,
    alt: "brain",
    para: "We help our student athletes balance their academics and training perfectly.",
  },
  {
    svg: ImagePath.TIME_ICON,
    alt: "time",
    para: "We customize lesson plans and study hours to help our young sportspersons excel in academics.",
  },
];

const RightSchool = () => {
  return (
    <>
      <div className="md:flex gap-10 items-center">
        <div>
          <h3 className="text-[#2949FF] font-extrabold lg:text-5xl text-3xl mb-2 mt-10">
            The Right School For Future Champions :
          </h3>
          <p className="text-black text-justify">
            Internatinal Schooling, accredited by Cognia is a KG-12 American
            online School. With a diverse community of students from over 135
            countries, International Schooling is helping thousands of students
            achieve their dreams without sacrificing their education.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-2 gap-3">
          {content.map((item, index) => (
            <div key={index} className="card mt-5">
              <div className="card-body bg-white rounded-2xl p-5 shadow-lg">
                <Image
                  width={100}
                  height={100}
                  src={item.svg}
                  alt={item.alt}
                  className="w-8 h-8 mx-auto"
                />
                <p className="text-center text-sm md:text-sm lg:mt-5 mt-3">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSchool;
