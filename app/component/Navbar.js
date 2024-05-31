"use client";
import React, { useState } from "react";
import ImagePath from "constant/ImagePath";
import Image from "next/image";
import Link from "next/link";

const MenuItems = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Program",
    link: "/program",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-full bg-white/95 sticky top-0 shadow-sm z-[9999]">
        <div className="r-w flex justify-between items-center py-5 gap-2">
          <Link className="w-full md:w-1/2 lg:w-1/3" href={"/"}>
            <Image
              width={500}
              height={500}
              src={ImagePath.LOGO}
              alt="logo"
              className=""
              priority
            />
          </Link>
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-10 ">
              {MenuItems.map((item, index) => (
                <li
                  className="font-semibold hover:text-[#007EFF] duration-150"
                  key={index}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="">
              <Link
                href={"https://internationalschooling.org/enrollment/"}
                className="rounded-full border-2 py-2 px-3 font-semibold ml-8 hover:border-[#007EFF] duration-150 hover:text-[#007EFF]"
              >
                Enrollment
              </Link>
            </div>
          </div>

          {/* Small Screens  */}

          <Link
            href={"https://internationalschooling.org/enrollment/"}
            className="rounded-lg border-2 py-2 px-3 text-sm font-semibold text-white border-[#007EFF] bg-[#007EFF] duration-150 hover:bg-blue-700 hover:border-blue-700 lg:hidden"
          >
            Enrollment
          </Link>
          <label className="swap swap-rotate btn btn-square p-2 lg:hidden ">
            <input
              onClick={() => {
                ToggleMenu();
              }}
              type="checkbox"
            />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          <div className="lg:hidden flex absolute bg-white w-full top-20 shadow-sm p-1 left-0">
            {isOpen && (
              <div className="flex flex-col py-5 px-3">
                <ul className="flex flex-col gap-4">
                  {MenuItems.map((item, index) => (
                    <li
                      className="font-semibold hover:text-[#007EFF] duration-150"
                      key={index}
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
