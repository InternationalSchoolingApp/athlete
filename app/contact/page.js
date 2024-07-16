import ImagePath from "constant/ImagePath";
import React from "react";
import Image from "next/image";
import DemoForm from "component/DemoForm";
import Navbar from "component/Navbar";
import Footer from "component/Footer";
//import PPCForm from "component/PPCForm";

export const metadata = {
  title: "Contact Us | International Schooling - Student Athletes Program",
  description:
    "Contact International Schooling for inquiries, support, or to learn more about our Student Athletes Program. Reach out to us today and take the first step towards academic and athletic excellence.",
  robots: "index,follow",
  referrer: "no-referrer-when-downgrade",
};

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="r-w flex flex-col lg:flex-row justify-center lg:items-start items-center pt-10 gap-10 !mb-12">
        <div className="text-black/80 w-3/4 lg:mt-10">
          <h1 className="g-t bg-gradient-to-r from-[#001FCF] to-[#007EFF] text-2xl lg:text-6xl font-bold mb-6 text-center lg:text-left">
            TALK TO US
          </h1>
          <p className="text-black-600 text-sm text-justify mb-6">
            Our counselors are trained and certified to create a safe space for
            you and your child. Their expertise and years of experience makes them
            the best at creating a special and customized learning plan for your
            child.
          </p>
          <Image
            src={ImagePath.CONTACT_IMG}
            className="h-auto"
            width={400}
            height={320}
            priority={true}
            alt="map_image"
          />
        </div>
        <div className="lg:w-2/3 w-full">
          <h2 className="text-xl font-bold mb-4 text-center">
            Fill The Form To Know More
          </h2>
          <DemoForm folderName={"Sports"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
