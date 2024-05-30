import ImagePath from "constant/ImagePath";
import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="w-full">
      <div className="r-w flex flex-col-reverse md:flex-row md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div className="w-2/3">
          <h1 className="g-t mb-4 font-extrabold text-3xl md:text-5xl bg-gradient-to-r from-[#001FCF] to-[#007EFF] inline-block text-transparent bg-clip-tex ">
            About Us
          </h1>
          <p className="text-gray-800 md:text-justify text-sm ">
            Lorem ipsum dolor sit amet consectetur. Sagittis cursus a iaculis eu
            non. Tincidunt vitae neque interdum ultricies. Accumsan purus erat
            tristique adipiscing. Id scelerisque etiam commodo fringilla
            sollicitudin cum velit. Enim id mi mattis pharetra enim mollis
            suspendisse donec elementum. Sed commodo nulla sem nisl odio.
            Egestas at lobortis ultrices mi dui. Morbi nunc morbi at justo sed
            eget. Metus in elit iaculis adipiscing suspendisse.
          </p>
        </div>
        <div className="">
          <Image
            src={ImagePath.ABOUT_IMG}
            width={400}
            height={400}
            className="h-auto"
            alt="image"
          />
        </div>
      </div>
      <div className="gap-10 r-w flex rounded-2xl bg-gradient-to-r from-[#0D073E] via-[#542848] to-[#0D073E] py-12 px-12">
        <div className="w-1/3 border-t border-l border-white/70 rounded-3xl py-12 px-12 ">
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
        <div className="w-1/3 border-r border-b border-white/70 rounded-3xl py-12 px-12">
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
        <div className="w-1/3 border-t border-r border-white/70 rounded-3xl py-12 px-12">
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
      </div>
      <div className="r-w flex flex-col-reverse md:flex-row md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div className="w-2/3 h-auto">
          <Image
            src={ImagePath.WHY_US_IMG}
            width={400}
            height={400}
            className="h-auto rounded-xl"
            alt="image"
          />
        </div>
        <div className="">
          <h1 className="g-t mb-4 font-extrabold text-3xl md:text-5xl bg-gradient-to-r from-[#001FCF] to-[#007EFF] inline-block text-transparent bg-clip-tex ">
            Why Us
          </h1>
          <p className="text-gray-800 md:text-justify mb-5 text-sm">
            International Schooling is Cognia-accredited K-12 Online School
            connects students across 120 countries to achieve career dreams
            without sacrificing education.
          </p>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.ICON1}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 md:text-justify text-sm">
                72% district, 16% national & 9% International level athletes in
                our student community.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.ICON2}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 md:text-justify text-sm">
                We give all our students free counselling on sports psychology
                and injury management.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.ICON3}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 md:text-justify text-sm">
                We provide concept-building and doubt building sessions to all
                our students.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src={ImagePath.ICON4}
                width={20}
                height={20}
                className="h-auto mb-3"
                alt="icon"
              />
            </div>
            <div>
              <p className="text-gray-800 md:text-justify text-sm">
                99% of our students spend less than 2 hours per day with us to
                excel in their studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
