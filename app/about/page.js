import ImagePath from "constant/ImagePath";
import React from "react";
import Image from "next/image";
import VideoElement from "component/VideoElement";
import Button from "component/Button";
import Navbar from "component/Navbar";
import Footer from "component/Footer";

export const metadata = {
  title: "About Us | International Schooling - Be the Best!",
  description:
    "Learn more about International Schooling's Student Athletes Program, connecting students globally for academic and athletic excellence.",
  robots: "index,follow",
  referrer: "no-referrer-when-downgrade",
};

function About() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute z-30 h-full w-full"></div>
        <video
          className="w-screen lg:h-[90svh] lg:object-cover"
          src={"/ncaa-video-new.mp4"}
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          data-ll-status="loaded"
        ></video>
      </div>
      <div className="r-w flex flex-col lg:flex-row lg:items-center justify-center lg:gap-12 py-6 lg:py-16 text-center lg:text-left">
        <div className="lg:w-2/3 w-full lg:mb-0 mb-5">
          <h1 className="g-t mb-4 font-extrabold text-3xl lg:text-5xl bg-gradient-to-r from-[#001FCF] to-[#007EFF] inline-block text-transparent bg-clip-text">
            About Us
          </h1>
          <p className="text-gray-800 lg:text-justify text-sm mb-5">
            International Schooling, accredited by Cognia, USA and approved by
            NCAA, is the best American Online School serving 14000+ students
            across 135+ countries. Our flexible schooling system prioritizes the
            dreams of every student and helps them pursue them without
            neglecting their academics. At International Schooling, we
            understand it becomes tough to balance academics and sports
            together. International Schooling encourages student athletes and
            helps them excel in academics as well as sports by customizing
            course plans and study hours best suited to the needs of our young
            sportspersons. With a diverse community of student athletes
            comprising international, national and province level players we
            prioritize both academic excellence and training. We are proud to
            have student athletes who are making us as well as their countries
            proud.
          </p>
          <Button
            message={"Let's Connect"}
            url={"/contact"}
            buttonClass={"w-1/2 lg:w-1/3"}
          />
        </div>
        <div className="mx-auto">
          <VideoElement
            image={ImagePath.ABOUT_IMG}
            url={
              "https://www.youtube.com/embed/EMvEtLBud8A?si=eoRDBiWxd4Err3wE&autoplay=1"
            }
          />
        </div>
      </div>
      {/* <div className="gap-10 r-w flex flex-col lg:flex-row justify-center items-stretch rounded-2xl bg-gradient-to-r from-[#0D073E] via-[#542848] to-[#0D073E] p-10">
        <div className="w-full border-t border-l border-white/70 rounded-3xl p-10">
          <Image
            src={ImagePath.VISOIN_ICON}
            width={50}
            height={50}
            className="h-auto mb-3"
            alt="icon"
          />
          <h1 className="text-white text-xl font-bold mb-3">Vision</h1>
          <p className="text-white text-sm text-justify">
            To create smiles for students across the globe with excellent
            quality schooling.
          </p>
        </div>
        <div className="w-full border-r border-b border-white/70 rounded-3xl p-10">
          <Image
            src={ImagePath.MISSION_ICON}
            width={50}
            height={50}
            className="h-auto mb-3"
            alt="icon"
          />
          <h1 className="text-white text-xl font-bold mb-3">Mission</h1>
          <p className="text-white text-sm text-justify">
            To change lives of students with the most accessible and affordable
            schooling.
          </p>
        </div>
        <div className="w-full border-t border-r border-white/70 rounded-3xl p-10">
          <Image
            src={ImagePath.PHILOSOPHY_ICON}
            width={50}
            height={50}
            className="h-auto mb-3"
            alt="icon"
          />
          <h1 className="text-white text-xl font-bold mb-3">Philosophy</h1>
          <p className="text-white text-sm text-justify">
            Each child is unique and deserves an education as per their needs,
            and every decision we make revolves around the student.
          </p>
        </div>
        <div />
      </div> */}
      <div className="r-w flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12 py-6 lg:py-16 text-center lg:text-left">
        <Image
          src={ImagePath.WHY_US_IMG}
          width={400}
          height={400}
          priority
          className="h-auto w-full md:max-w-[500px] rounded-xl"
          alt="image"
        />
        <div className="lg:mb-0 mb-10">
          <h1 className="g-t mb-4 font-extrabold text-3xl lg:text-5xl bg-gradient-to-r from-[#001FCF] to-[#007EFF] inline-block text-transparent bg-clip-tex ">
            Why Us
          </h1>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.ACCREDITED}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 text-sm">Accredited and recognized</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.APPROVED_BY_NCAA}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 text-sm">Approved by NCAA</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.AFFORDABLE}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 text-sm">Accessible and Affordable</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.CUSTOMIZED_LEARNING}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 text-sm">Customized learning</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.FLEXIBLE_STUDY}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 text-sm">Flexible study hours</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.FREE_COUNSELING}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 text-left text-sm">
                Free counseling on sports psychology and injury management
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.SUPPORT}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 text-sm">
                24/7 administration support
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
