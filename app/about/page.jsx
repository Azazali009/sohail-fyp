import Image from "next/image";
import React from "react";
import AboutComponent from "../components/AboutComponent";

const About = () => {
  return (
    <div className=" max-w-6xl mx-auto py-12">
      <div className=" mb-36 border-b border-stone-200 pb-8 grid grid-cols-[2fr_1.5fr] items-center gap-x-12 ">
        {/* left content */}
        <div className=" space-y-8">
          <h1 className=" text-6xl leading-[4rem] font-bold text-stone-800">
            We are breaking barriers to accessibility
          </h1>

          <p className=" text-lg">
            Imagine a world where access to published research is no longer
            limited to those privileged enough to have access through their
            institutions, and everyone, regardless of their background, can find
            and discover content they are looking for, hence reducing the
            inequalities currently affecting our industry.
            <br />
            <br />
            We would like to see scholarly literature being available to all who
            are seeking to research, gain knowledge, or simply make
            evidence-based decisions.
          </p>
        </div>
        {/* right image */}
        <div>
          <Image
            src={"/aboutWorld.webp"}
            width={200}
            height={200}
            alt="about image"
            className=" w-full rounded-md"
          />
        </div>
      </div>

      <div className=" mb-36 border-b border-stone-200 pb-8 grid grid-cols-2 items-center gap-x-12 ">
        {/* left image */}
        <div>
          <Image
            src={"/aboutWorld2.webp"}
            width={200}
            height={200}
            alt="about image"
            className=" w-full rounded-md"
          />
        </div>
        {/* right content */}
        <div className=" space-y-4">
          <h1 className=" capitalize text-3xl leading-[4rem] font-bold text-stone-800">
            about us
          </h1>

          <p className=" text-lg">
            In 2019, we established a research library to help individuals read
            and download research from the world’s leading publishers.
            <br />
            <br />
            Now, we’ve taken the research discovery experience further with a
            host of AI-powered research tools - including ZAIA, your personal AI
            assistant for research.
            <br />
            <br />
            ARA offers a blended discovery experience where you can read and
            download open access and paywalled research from the world’s leading
            publishers on one platform.
            <br />
            <br />
            Our affordable access subscription means for less than the price of
            a single research paper per month, you get unlimited access to
            academic research. No restrictions.
            <br />
            <br />
            We would like to see scholarly literature being available to all who
            are seeking to research, gain knowledge, or simply make
            evidence-based decisions.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-[2fr_15rem] gap-x-5">
        <div className=" space-y-5 max-w-[80%] justify-self-center text-stone-900">
          <h2 className=" text-4xl font-bold ">Our commitment to the future</h2>
          <p className=" text-lg">
            Together with Knowledge E, we signed the United Nations SDG
            Publisher’s Compact as a part of our ongoing commitment to make
            information and knowledge more accessible to a broader audience,
            including individuals in remote or underserved areas.
            <br />
            <br />
            Through collaboration with our content providers, we support SDG 4
            (Quality Education) through disseminating research and SDG 10
            (reduced inequalities) by bridging the digital divide and ensuring
            equitable access via our global platform.
            <br />
            <br />
            Research is the cornerstone of progress, and we’re optimistic that
            we can create a more equitable future through universal action!
          </p>
        </div>

        <div>
          <Image
            width={200}
            height={200}
            alt="about image"
            src={"/trees-about.webp"}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
