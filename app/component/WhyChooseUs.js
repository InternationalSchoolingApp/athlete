import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";
import PPCForm from "./PPCForm";

const content = [
  {
    svg: ImagePath.BOOK_ICON,
    alt: "book-icon",
    heading: "Customized Learning:",
    para: "We understand every student has different learning needs and varying schedules. Acknowledging the diverse learning requirements of every student, International Schooling tailors lesson plans and study hours to suit their individual needs.",
    width: "w-6",
  },
  {
    svg: ImagePath.TEACHER_ICON,
    alt: "teacher-icon",
    heading: "Internationally Trained and Certified Teachers:",
    para: "International Schooling has over 600+ teachers from over 50 counties, speaking 40+ languages who have extensive experience and expertise in their respective fields.",
    width: "w-7",
  },
  {
    svg: ImagePath.CURRICULUM_ICON,
    alt: "curriculum-icon",
    heading: "American Curriculum:",
    para: "International Schooling offers American Curriculum from grades KG-12 and awards the prestigious American High School Diploma. Our academic programs are designed to prepare your child for success in college and beyond.",
    width: "w-7",
  },
  {
    svg: ImagePath.CLASS_ICON,
    alt: "class-icon",
    heading: "Flexibility:",
    para: "The flexibility offered by International Schooling caters to varied schedules, fosters personalized learning environments, adjusts to individual learning paces and, accommodates the diverse learning styles of its students.",
    width: "w-7",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-col lg:flex-row bg-gradient-to-r from-[#0D073E] via-[#542848] to-[#0D073E] rounded-3xl lg:p-10 p-5 mt-10 lg:gap-10 gap-5">
        <div className="lg:p-0 p-5">
          <h3 className="font-extrabold text-3xl lg:text-5xl mb-8 text-white">
            Why Choose Us?
          </h3>
          <div className="flex flex-col gap-8">
            {content.map((item, index) => (
              <div key={index} className="text-white">
                <Image
                  width={100}
                  height={100}
                  src={item.svg}
                  alt={item.alt}
                  className={`mb-1 ${item.width}`}
                />
                <p className="font-bold mb-1 text-lg">{item.heading}</p>
                <p className="text-xs md:text-sm text-justify">{item.para}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl lg:p-5 p-2">
          <div className="text-black text-center mb-5">
            <p className="text-lg lg:text-2xl font-bold">FILL THE FORM</p>
            <p className="text-base lg:text-lg font-medium">
              To Talk to our expert Academic Counsellor
            </p>
          </div>
          <PPCForm folderName={"athelete"} />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
