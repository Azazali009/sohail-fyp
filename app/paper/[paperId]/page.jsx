"use client";

import React, { useState } from "react";
import { usePaper } from "../usePaper";
import { useRouter } from "next/navigation";

const SinglePaper = () => {
  useState;
  const router = useRouter();
  const { Paper, isLoadingSinglePaper, isError } = usePaper();

  const handleViewPdf = (pdf) => {
    window.open(pdf, "_blank");
  };

  if (isLoadingSinglePaper)
    return (
      <div className=" min-h-screen flex justify-center  items-center">
        <p className=" font-medium capitalize text-stone-600">Loading...</p>
      </div>
    );
  if (isError) return <p>Error to load data!</p>;
  return (
    <div className="  relative space-y-8 max-w-5xl mx-auto px-4 py-8 text-stone-600">
      <button
        onClick={() => router.back()}
        className=" absolute top-4 -left-10 shadow-xl hover:shadow-none duration-200 bg-gray-100 flex items-center justify-center text-stone-600 w-12 h-12 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </button>
      <h1 className=" text-3xl font-semibold  leading-10">{Paper.title}</h1>

      {/* publisher box */}
      <div className="flex gap-28 font-semibold">
        <p>
          Publisher: <span>{Paper.publisher}</span>{" "}
        </p>
        <div className="flex gap-2 items-center">
          {/* <button
            onClick={() => handleDownload(Paper.pdf)}
            className=" bg-sky-500 flex items-center gap-3 rounded-md px-6 py-2 border-none text-white capitalize font-medium"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </span>
            <span>download paper</span>
          </button> */}
          <button
            onClick={() => handleViewPdf(Paper.pdf)}
            className=" bg-sky-500 items-center hover:bg-white hover:shadow-xl hover:text-stone-600 duration-300 flex gap-3 rounded-md px-6 py-2 border-none text-white capitalize font-medium"
          >
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </p>
            <span>
              view <span>PDF</span>
            </span>
          </button>
        </div>
      </div>

      {/* author box */}

      <div className="text-primary ">
        <p>
          {Paper.author} <span>All authors</span>{" "}
        </p>
        <div className="divider"></div>
      </div>

      {/* main detail */}

      {/* abstarct box */}
      <div>
        <h3 className=" font-semibold mb-3 capitalize">Abstract</h3>
        <p className=" leading-7">{Paper.abstract}</p>
      </div>
      {/* published year box */}
      <div className="flex gap-6 font-semibold">
        <h3>Published in:</h3>
        <p>{Paper.pubdate}</p>
      </div>
      {/* publishers box */}
      <div className="flex gap-6 font-semibold">
        <h3>Publishers:</h3>
        <p>{Paper.publisher}</p>
      </div>

      {/* accordians */}

      <div className=" max-w-[70%]">
        {/* keywords accordian */}
        <div className="collapse collapse-arrow rounded-none  bg-white border-b border-gray-300">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl capitalize ">keywords</div>
          <div className="collapse-content">
            <p>{Paper.keywords}</p>
          </div>
        </div>

        {/* introduction accordians */}
        <div className="collapse collapse-arrow rounded-none  bg-white border-b border-gray-300">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title capitalize text-xl ">introduction</div>
          <div className="collapse-content">
            <p>{Paper.introduction}</p>
          </div>
        </div>

        {/* conculsion accordians */}
        <div className="collapse capitalize collapse-arrow rounded-none  bg-white border-b border-gray-300">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl ">conclusion</div>
          <div className="collapse-content">
            <p>{Paper.conclusion}</p>
          </div>
        </div>

        {/* references accordians */}
        <div className="collapse capitalize collapse-arrow rounded-none  bg-white border-b border-gray-300">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl ">references</div>
          <div className="collapse-content">
            <div className=" flex flex-col gap-4">
              {Paper.references?.split("[").map((w) => (
                <p key={w + 1}>{w}</p>
              ))}
            </div>
          </div>
        </div>
        {/* department accordians */}
        <div className="collapse capitalize collapse-arrow rounded-none  bg-white border-b border-gray-300">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl ">department</div>
          <div className="collapse-content">
            <p>{Paper.department}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePaper;
