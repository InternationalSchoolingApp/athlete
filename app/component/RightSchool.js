import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";

const content = [
  {
    svg: ImagePath.MEDAL_ICON,
    alt: "medal",
    para: "Over 2000 athletes from our student community playing at International, National and State levels.",
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
      <div className="">
        <h3 className="text-[#2949FF] font-extrabold lg:text-4xl text-xl mb-2 mt-10">
          The Right School For Future Champions :
        </h3>
        <p className="text-black font-medium lg:w-1/2">
          International Schooling, accredited by Cognia is a KG-12 American
          online School. With a diverse community of students from over 135
          countries, International Schooling is helping thousands of students
          achieve their dreams without sacrificing their education.
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
