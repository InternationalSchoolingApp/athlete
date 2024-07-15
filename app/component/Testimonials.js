import ImagePath from "constant/ImagePath";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const TestimonialsContent = [
  {
    image: ImagePath.TESTIMONIALS_1,
    alt: "testimonials-1",
    para: "This is the first experience with International Schooling, and me and my 2 kids are happy with it. Both kids are 12 and 9 years old and have already experienced the online school model while the covid time. Both are very happy with the curriculum, teachers and the One-To-One teaching method. Thank you International Schooling.",
    name: "Riyad Bahloul",
  },
  {
    image: ImagePath.TESTIMONIALS_2,
    alt: "testimonials-1",
    para: "As an expat in UAE for the last 5 years, I wanted a ‘real’ American School for my son and International Schooling is providing me exactly that… in fact much more than I expected. Parent to parent, I would recommend International Schooling without a doubt.",
    name: "Daniel Henderson",
  },
  {
    image: ImagePath.TESTIMONIALS_3,
    alt: "testimonials-1",
    para: "My daughter is in Grade 10 at International Schooling. She wants to join a US university after completing Grade 12 and aspires to become an architect. After joining International Schooling, she is getting better academic scores and is more confident about fulfilling her dream. Many many thanks to International Schooling",
    name: "Salwa Bassam",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="bg-[#C5E2FF] rounded-3xl lg:p-10 p-5 mt-10">
        <h3 className="font-extrabold text-xl lg:text-4xl text-center">
          HEAR FROM OUR HAPPY PARENTS
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 gap-4 my-5">
          <Image
            width={250}
            height={200}
            src={ImagePath.GOOGLE_RATING}
            alt="google-rating"
            className=""
          />
          <Image
            width={250}
            height={200}
            src={ImagePath.TRUSTPILOT_RATING}
            alt="google-rating"
            className=""
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {TestimonialsContent.map((item, index) => (
            <div key={index} className="card">
              <div className="card-body bg-white shadow-sm rounded-2xl">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.alt}
                  className="w-20 mx-auto"
                />
                <p className="text-black mb-10 text-sm text-justify">{item.para}</p>
                <p className="text-black font-bold text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <h3 className=" lg:text-2xl font-semibold text-black lg:mb-7 mb-4 text-center">
          Crafting brilliance, Igniting potential and Embracing the
          extraordinary at every step
        </h3>
        <Button
          message={"Let's Connect"}
          url={"/contact"}
          buttonClass={"w-1/2 lg:w-1/3"}
        />
      </div>
    </>
  );
};

export default Testimonials;
