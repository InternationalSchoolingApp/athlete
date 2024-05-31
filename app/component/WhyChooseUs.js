import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";
import PPCForm from "./PPCForm";

const content = [
  {
    svg: ImagePath.BOOK_ICON,
    alt: "icon",
    heading: "Personalized Learning",
    para: "We understand that everyone learns differently. That's why we offer personalized learning plans tailored to your child's individual needs and goals.",
  },
  {
    svg: ImagePath.BOOK_ICON,
    alt: "icon",
    heading: "Best Teachers",
    para: "Our trained and certified teachers from 50+ countries have helped countless student athletes achieve their academic goals.",
  },
  {
    svg: ImagePath.BOOK_ICON,
    alt: "icon",
    heading: "American Curriculum",
    para: "Our academic programs are designed to prepare your child for success in college and beyond. From math and science to humanities and social sciences, we've got your child covered.",
  },
  {
    svg: ImagePath.BOOK_ICON,
    alt: "icon",
    heading: "Flexible Class Schedule",
    para: "With our online platform, you can study whenever and wherever you want. Whether you're on the road for a tournament or training at your local gym, you can always stay on track with your coursework.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-col lg:flex-row bg-gradient-to-r from-[#542848] via-[#0D073E] to-[#542848] lg:p-10 p-5 rounded-3xl mt-10 lg:gap-10 gap-5">
        <div className="">
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
                  className="w-5 mb-1"
                />
                <h5 className="font-bold mb-1">{item.heading}</h5>
                <p className="font-medium">{item.para}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#272D3D] p-3 rounded-2xl">
          <div className="text-white text-center mb-5">
            <p className="text-lg lg:text-2xl font-bold">FILL OUT THE FORM</p>
            <p className="text-base lg:text-lg font-medium">
              TO ENGAGE WITH OUR ACADEMIC EXPERT
            </p>
          </div>
          <PPCForm />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
