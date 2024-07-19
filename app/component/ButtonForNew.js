import Link from "next/link";
import React from "react";

const Button = ({ message, url, target, referrerPolicy, buttonClass }) => {
  return (
    <div
      className={`relative text-transparent  font-extrabold mx-auto lg:mx-0 lg:p-5 p-[1.1rem] ${buttonClass}`}
    >
      <Link
        href={url}
        target={target}
        referrerPolicy={referrerPolicy}
        className="bg-[#2949FF] absolute text-white rounded-full py-2 px-5 font-extrabold top-0 left-0 hover:top-1 hover:left-1 transition-all duration-150 w-full -mt-1 -ml-1 text-center lg:text-base text-sm"
      >
        {message}
      </Link>
    </div>
  );
};

export default Button;
