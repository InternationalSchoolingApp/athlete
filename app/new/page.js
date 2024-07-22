import ButtonForNew from "component/ButtonForNew";
import VideoElement from "component/VideoElement";
import VideoElementNew from "component/VideoElementNew";
import WhyChooseUs from "component/WhyChooseUs";
import RightSchoolNew from "component/RightSchoolNew";
import ImagePath from "constant/ImagePath";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SportsStarsNew from "component/SportsStarsNew";
import CollegesMarquee from "@components/CollegesMarquee";

function NewPage() {
  return (
    <div className="bg-[#F7FBFF]">
      {/* <Header /> */}
      <div className="w-full z-20 bg-white/50 backdrop-blur sticky top-0 right-0 left-0 shadow">
        <header className="r-w  flex items-center justify-between py-2 ">
          <Link href={"/new"}>
            <Image
              priority
              alt="logo"
              src={ImagePath.LOGO}
              width={250}
              height={40}
              className=" w-[200px] md:w-[300px] h-auto"
            />
          </Link>
          <Link
            href={"#form"}
            className="btn bg-blue-600 text-white hover:text-blue-600 duration-300 uppercase rounded-full"
          >
            Enroll Now
          </Link>
        </header>
      </div>
      <div className="">
        <div className="r-w py-2 md:py-4 ">
          <p className="text-lg md:text-xl font-semibold text-center mb-2 md:mb-4">
            #Top Rated
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center gap-1 md:gap-10">
            <Image
              width={250}
              height={40}
              src={ImagePath.TRUSTPILOT_RATING}
              alt="rating"
              className="h-auto mb-3"
            />
            <Image
              width={250}
              height={40}
              src={ImagePath.GOOGLE_RATING}
              alt="rating"
              className="h-auto mb-3"
            />
          </div>
        </div>
        <div className="r-w md:flex items-center gap-10 ">
          <div className="text-center md:text-left">
            <p className="bg-[#2949FF] text-white px-4 py-1 text-xs md:text-lg rounded-md mb-4 w-max mx-auto md:mx-0">
              YOUR SCHOOL | YOUR LOCATION | YOUR TIME
            </p>
            <h1 className="text-2xl lg:text-4xl font-black font-Passion-One mb-4">
              <span className="text-[#2949FF]">American Online School</span>
              <br />
              For Student Athletes
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 w-max mx-auto md:mx-0 mb-5">
              <div className="flex gap-1">
                <Image
                  src={ImagePath.CHECK_ICON}
                  width={30}
                  height={30}
                  alt="icon"
                  className=""
                />
                <p>ACCREDITED</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src={ImagePath.CHECK_ICON}
                  width={30}
                  height={30}
                  alt="icon"
                  className=""
                />
                <p>RECOGNIZED</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src={ImagePath.CHECK_ICON}
                  width={30}
                  height={30}
                  alt="icon"
                  className=""
                />
                <p>APPROVED</p>
              </div>
            </div>
          </div>
          <div className="items-center">
            <Image
              src={ImagePath.ATHLETE_HERO_IMAGE}
              width={600}
              height={600}
              alt="image"
              className="mx-auto h-auto"
            />
          </div>
        </div>
        <div className="r-w items-center bg-yellow-400 rounded-2xl p-5  text-center ">
          <h2 className="lg:text-5xl text-2xl">
            ATHLETE DISCOUNT <span className="font-bold">UPTO 20%</span>
          </h2>
        </div>
        <div className="r-w flex items-center justify-center flex-col lg:flex-row lg:gap-10 py-12 ">
          <VideoElement
            image={ImagePath.ABOUT_IMG}
            url={
              "https://www.youtube.com/embed/EMvEtLBud8A?si=eoRDBiWxd4Err3wE&autoplay=1"
            }
          />

          <div className="text-center">
            <p className="text-justify mb-6">
              International Schooling, accredited by Cognia, USA and approved by
              National Collegiate Athletic Association (NCAA) and College Board
              is the most recommended and trusted online school. We are serving
              over 3500 student athletes from 135+ countries, playing more than
              50 sports.
            </p>
            <ButtonForNew
              message={"Talk to us"}
              url={"/contact"}
              buttonClass={"w-1/2 lg:w-1/3 uppercase"}
            />
          </div>
        </div>
        <div className="r-w grid grid-cols-2 md:grid-cols-4 gap-2 items-center bg-[#DFE8FF] py-5 px-7 rounded-3xl !mb-10">
          <Image
            src={ImagePath.COGNIA_LOGO}
            width={150}
            height={100}
            alt="cognia"
            className="h-auto justify-self-center"
          />
          <Image
            src={ImagePath.NCAA_LOGO}
            width={150}
            height={100}
            alt="cognia"
            className="h-auto justify-self-center"
          />
          <Image
            src={ImagePath.ADVANCED_LOGO}
            width={150}
            height={100}
            alt="cognia"
            className="h-auto justify-self-center"
          />
          <Image
            src={ImagePath.COLLEGEBOARD_LOGO}
            width={150}
            height={100}
            alt="cognia"
            className="h-auto justify-self-center"
          />
        </div>
        <div className="r-w md:flex items-center gap-10  bg-[#2949FF] rounded-3xl justify-between md:p-10 p-5 text-center md:text-left !mb-10">
          <div>
            <h3 className="text-white text-3xl md:text-5xl font-bold !mb-4">
              Scholarship for our athletes:
            </h3>
            <p className="text-white text-sm md:text-lg !mb-2">
              <span className="font-bold text-xl md:text-2xl">10%</span>{" "}
              SCHOLARSHIP PROVINCE LEVEL
            </p>
            <p className="text-white text-sm md:text-lg !mb-2">
              <span className="font-bold text-xl md:text-2xl">15%</span>{" "}
              SCHOLARSHIP PROVINCE LEVEL
            </p>
            <p className="text-white text-sm md:text-lg !mb-4">
              <span className="font-bold text-xl md:text-2xl">20%</span>{" "}
              SCHOLARSHIP INTERNATIONAL LEVEL
            </p>
          </div>
          <div>
            <Image
              src={ImagePath.SCHOLARSHIP_IMAGE}
              width={400}
              height={400}
              alt="image"
              className="mx-auto h-auto justify-self-center"
            />
          </div>
        </div>
        <div className="r-w !mb-10 items-center mx-auto h-auto">
          <WhyChooseUs />
        </div>
        <div className="r-w !mb-5 !md:mb-10">
          <RightSchoolNew />
        </div>
        <div className="r-w py-6 !mb-5 !md:mb-10">
          <h2
            className="mb-4 font-bold md:text-2xl text-center text-black
             "
          >
            OUR STUDENTS HAVE JOINED TOP COLLEGES & UNIVERSITIES ACROSS THE
            GLOBE
          </h2>
          {/* <CollegesMarquee /> */}
          {/* For Desktop */}
          <Image
            src={ImagePath.UNIVERSITY_LOGO_2}
            width={1200}
            height={200}
            alt="image"
            className="mx-auto h-auto hidden md:block mb-3"
          />
          <Image
            src={ImagePath.UNIVERSITY_LOGO_1}
            width={1200}
            height={200}
            alt="image"
            className="mx-auto h-auto hidden md:block"
          />
          {/* For Mobile */}
          <Image
            src={ImagePath.MOBILE_UNIVERSITY_LOGO_1}
            width={600}
            height={200}
            alt="image"
            className="mx-auto h-auto md:hidden sm:block mb-2"
          />
          <Image
            src={ImagePath.MOBILE_UNIVERSITY_LOGO_2}
            width={600}
            height={200}
            alt="image"
            className="mx-auto h-auto md:hidden sm:block mb-2"
          />
          <Image
            src={ImagePath.MOBILE_UNIVERSITY_LOGO_3}
            width={600}
            height={200}
            alt="image"
            className="mx-auto h-auto md:hidden sm:block mb-2"
          />
          <Image
            src={ImagePath.MOBILE_UNIVERSITY_LOGO_4}
            width={600}
            height={200}
            alt="image"
            className="mx-auto h-auto md:hidden sm:block"
          />
        </div>
        <div className="r-w !mb-10">
          <SportsStarsNew />
        </div>
        <div className="r-w  bg-[#DFE8FF] p-5 md:p-10 rounded-3xl !mb-10">
          <h2 className="text-center md:text-3xl text-xl text-black font-bold mb-5">
            HEAR FROM OUR SUPER SATISFIED STUDENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <VideoElementNew
              image={ImagePath.BASKETBALL_PLAYER}
              url={
                "https://www.youtube.com/embed/hroZgoC0LSc?si=5upqhuXAZDwuY5N-"
              }
              playButton={"!w-[60px] !h-[60px]"}
            />
            <VideoElementNew
              image={ImagePath.HORSE_JUMPER}
              url={
                "https://www.youtube.com/embed/J-l8mV4_7hY?si=yaIseQIRbBN9pggX"
              }
              playButton={"!w-[60px] !h-[60px]"}
            />
            <VideoElementNew
              image={ImagePath.BASKETBALL_NEXT_PLAYER}
              url={
                "https://www.youtube.com/embed/OZUhU_VBs8E?si=c0vp28UabD2BE52d"
              }
              playButton={"!w-[60px] !h-[60px]"}
            />
          </div>
        </div>
        <div className=" r-w mt-10 lg:mt-16 flex flex-col items-center !mb-10">
          <h3 className="font-bold text-black text-center lg:text-2xl mb-6 ">
            Crafting brilliance, Igniting potential and Embracing the
            extraordinary at every step
          </h3>
          <ButtonForNew
            message={"Let's Connect"}
            url={"https://enroll.internationalschooling.org/demo/"}
            target={"_blank"}
            referrerPolicy={"no-referrer"}
            buttonClass={"w-full lg:w-1/6"}
          />
        </div>
      </div>
      <div className="bg-gray-100 py-4">
        <div className="r-w text-xs md:text-sm text-center font-mono">
          <p>
            Copyright © {new Date().getFullYear()} - International Schooling{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
