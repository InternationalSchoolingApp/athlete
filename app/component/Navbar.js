"use client";
import React, { useEffect, useState } from "react";
import ImagePath from "constant/ImagePath";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  // {
  //   name: "Program",
  //   link: "/program",
  // },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [router])

  const ToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-full bg-white/50 sticky top-0 shadow-sm z-[9999] lg:min-h-[10svh]">
        <div className="r-w flex justify-between items-center py-3 gap-2 bb">
          <Link className="w-max" href={"/"}>
            <Image
              width={250}
              height={40}
              src={ImagePath.LOGO}
              alt="logo"
              className="h-auto "
              priority
            />
          </Link>
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-10 ">
              {MenuItems.map((item, index) => (
                <li
                  className={`font-semibold hover:text-[#007EFF] duration-150 ${router === item.link ? "text-[#007EFF]" : ""
                    }`}
                  key={index}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="">
              <Link
                href={"https://internationalschooling.org/enrollment/"}
                referrerPolicy="no-referrer"
                target="_blank"
                className="rounded-full border-2 py-2 px-3 font-semibold ml-8 hover:border-[#007EFF] duration-150 hover:text-[#007EFF]"
              >
                Enrollment
              </Link>
            </div>
          </div>

          {/* Small Screens  */}

          <div className="flex justify-between items-center gap-3 lg:hidden">
            <Link
              href={"https://internationalschooling.org/enrollment/"}
              referrerPolicy="no-referrer"
              target="_blank"
              className="rounded-lg border-2 py-2 px-3 text-sm font-semibold text-white border-[#007EFF] bg-[#007EFF] duration-150 hover:bg-blue-700 hover:border-blue-700 lg:hidden"
            >
              Enrollment
            </Link>
            <label className="swap swap-rotate btn btn-square p-2 lg:hidden ">
              <input
                className=""
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
          </div>
        </div>
        <div className="lg:hidden flex absolute bg-white !w-full top-[4.5rem] shadow-md left-0">
          {isOpen && (
            <div className="flex flex-col py-5 px-3">
              <ul className="flex flex-col gap-4">
                {MenuItems.map((item, index) => (
                  <li
                    className={`font-semibold hover:text-[#007EFF] duration-150 ${router === item.link ? "text-[#007EFF]" : ""
                      }`}
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
    </>
  );
};

export default Navbar;
