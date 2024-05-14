import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card2 = ({ image }) => {
  return (
    <div className="text-gray-800 space-y-2">
      <Image
        src={image}
        height={300}
        width={300}
        alt="photo"
        className="w-[70%] rounded-lg"
      />
      <h2 className="font-medium text-black capitalize">The IEEE app</h2>
      <p>
        Browse courses made by IEEE Technical Communities and Societies on core
        and emerging technologies, leadership skills, and more.
      </p>
      <Link
        href={"/"}
        className="text-sky-600 flex gap-2 items-center capitalize"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span>download</span>
      </Link>
      <div className="h-3 bg-gray-300 rounded-full w-full"></div>
    </div>
  );
};

export default Card2;
