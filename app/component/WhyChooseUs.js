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
    para: "International Schooling has teachers from over 600+ countries speaking 40+ languages who have extensive experience and expertise in their respective fields.",
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
      <div className="flex justify-between items-center flex-col lg:flex-row bg-gradient-to-r from-[#542848] via-[#0D073E] to-[#542848] rounded-3xl lg:p-10 p-0 mt-10 lg:gap-10 gap-5">
        <div className="lg:p-0 p-5">
          <h3 className="font-extrabold text-2xl lg:text-4xl mb-8 text-white">
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
                <p className="font-medium">{item.para}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#272D3D] rounded-2xl lg:p-5 p-2">
          <div className="text-white text-center mb-5">
            <p className="text-lg lg:text-2xl font-bold">FILL OUT THE FORM</p>
            <p className="text-base lg:text-lg font-medium">
              TO ENGAGE WITH OUR ACADEMIC EXPERT
            </p>
          </div>
          <PPCForm folderName={"athelete"} />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
