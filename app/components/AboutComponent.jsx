import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutComponent = () => {
  return (
    <div className="grid px-4 max-w-[90%] mx-auto py-12 grid-cols-2 gap-x-2">
      <div className=" space-y-5">
        <p className=" font-semibold text-stone-900">About us</p>
        <h1 className=" text-stone-900 font-bold text-3xl leading-10">
          Inclusive, affordable and accessible
        </h1>
        <p className=" text-stone-600">
          ARA was founded with a vision to make research affordable and
          accessible for all. We are committed to fostering collaboration
          between publishers and research communities on a global scale, to
          ensure the dissemination of knowledge is inclusive, equitable, and
          sustainable.
        </p>

        <Link
          href={"/about"}
          className=" inline-block hover:bg-white font-semibold hover:shadow-xl hover:text-stone-900 bg-primary tracking-wider px-4 py-2 rounded-md text-white"
        >
          learn more &rarr;
        </Link>
      </div>

      <div className=" justify-self-center">
        <Image
          className=" w-full rounded-md"
          src={"/sohail.jpg"}
          width={200}
          height={200}
          alt="about"
        />
      </div>
    </div>
  );
};

export default AboutComponent;
