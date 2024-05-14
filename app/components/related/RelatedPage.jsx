import Card2 from "@/app/ui/Card2";
import React from "react";

const RelatedPage = () => {
  const arr = [
    {
      image: "/rel-1.jpg",
    },
    {
      image: "/rel-2.jpg",
    },
    {
      image: "/rel-3.jpg",
    },
    {
      image: "/rel-4.jpg",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto py-16 text-gray-800">
      <h2 className=" flex gap-2 mb-8 font-semibold capitalize text-3xl items-center">
        <span>related information </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>{" "}
      </h2>

      <div className="grid grid-cols-4 gap-x-4 gap-y-10">
        {arr.map((item, i) => (
          <Card2 image={item.image} key={i} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPage;
